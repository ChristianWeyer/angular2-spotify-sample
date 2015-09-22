/// <reference path="../typings/_custom.d.ts" />

import { bootstrap, bind } from 'angular2/angular2';
import { routerInjectables, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { SpotifyService } from './services/spotify';
import { AppComponent } from './components/app/app';

var injectables = [
  routerInjectables,
  SpotifyService,
  bind(LocationStrategy).toClass(HashLocationStrategy)
];

bootstrap(AppComponent, [injectables]);