/// <reference path="../../../typings/_custom.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var spotify_1 = require('../../services/spotify');
var fetch_1 = require('../../utils/fetch');
var ArtistComponent = (function () {
    function ArtistComponent(service, routeParams) {
        this.service = service;
        this.routeParams = routeParams;
        this.getArtist();
    }
    ArtistComponent.prototype.getArtist = function () {
        var _this = this;
        this.service.getArtistById(this.routeParams.params.id)
            .then(fetch_1.status)
            .then(fetch_1.json)
            .then(function (response) {
            _this.artist = response;
            _this.image = response.images[0].url;
        });
    };
    ArtistComponent = __decorate([
        angular2_1.Component({
            selector: 'artist',
            viewInjector: [spotify_1.SpotifyService]
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf],
            templateUrl: 'app/components/artist/artist.html'
        }), 
        __metadata('design:paramtypes', [spotify_1.SpotifyService, router_1.RouteParams])
    ], ArtistComponent);
    return ArtistComponent;
})();
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.js.map