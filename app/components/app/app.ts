/// <reference path="../../../typings/_custom.d.ts" />

import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterOutlet } from 'angular2/router';

import { SearchComponent } from '../../components/search/search';
import { ArtistComponent } from '../../components/artist/artist';

@Component({
    selector: 'spotify-app'
})
@View({
    directives: [RouterOutlet],
    templateUrl: 'app/components/app/app.html'
})
@RouteConfig([
    {path: '/search', as: 'search', component: SearchComponent},
    {path: '/artist/:id', as: 'artist', component: ArtistComponent},
    {path: '/', redirectTo: '/search'}
])
export class AppComponent {
    title:string;

    constructor() {
        this.title = 'My Spotify Finder';
    }
}