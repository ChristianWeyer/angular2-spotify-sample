/// <reference path="../typings/_custom.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var spotify_1 = require('./services/spotify');
var app_1 = require('./components/app/app');
var injectables = [
    router_1.routerInjectables,
    spotify_1.SpotifyService,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
];
angular2_1.bootstrap(app_1.AppComponent, [injectables]);
//# sourceMappingURL=bootstrap.js.map