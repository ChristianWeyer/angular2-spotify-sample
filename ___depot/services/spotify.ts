/// <reference path="../../typings/_custom.d.ts" />

export class SpotifyService {
	url: string;

	constructor() {
		this.url = 'https://api.spotify.com/v1/';
	}
	
	public searchArtist (value) {
		return window.fetch(this.url + 'search?type=artist&q=' + value);
	}
	
	public getArtistById (id) {
		return window.fetch(this.url + 'artists/' + id);
	}
}