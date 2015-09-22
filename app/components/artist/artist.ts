/// <reference path="../../../typings/_custom.d.ts" />

import { Component, View, NgIf } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

import { SpotifyService } from '../../services/spotify';
import { status, json } from '../../utils/fetch'

@Component({
	selector: 'artist'
})
@View({
	directives: [NgIf],
	templateUrl: 'app/components/artist/artist.html'
})
export class ArtistComponent {
	artist: Object;
	service: SpotifyService;
	routeParams: RouteParams;
	image: string;

	constructor(service: SpotifyService, routeParams: RouteParams) {
		this.service = service;
		this.routeParams = routeParams;

		this.getArtist();
	}

	public getArtist() {
		this.service.getArtistById(this.routeParams.params.id)
			.then(status)
			.then(json)
			.then((response) => {
				this.artist = response;
				this.image = response.images[0].url;
			})
	}
}