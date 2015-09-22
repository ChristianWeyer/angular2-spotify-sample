/// <reference path="../../../typings/_custom.d.ts" />

import { Component, View, NgFor, Inject } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

import { SpotifyService } from '../../services/spotify';
import { status, json } from '../../utils/fetch'

@Component({
	selector: 'search',
	viewInjector: [SpotifyService]
})
@View({
	directives: [NgFor, RouterLink],
	templateUrl: 'app/components/search/search.html'
})
export class SearchComponent {
	timeoutId: number;
	artists: Object;
	service: SpotifyService;

	constructor(service: SpotifyService) {
		this.service = service;
	}

	public searchArtist($event, searchValue) {
		if (!searchValue.value) {
			return;
		}

		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}

		this.timeoutId = setTimeout(() => {
			this.service.searchArtist(searchValue.value)
				.then(status)
				.then(json)
				.then((response) => {
					this.setResults(response.artists.items);
				})
		}, 250);
	}

	public setResults(artists: Array<Object>) {
		this.artists = artists;
	}
}