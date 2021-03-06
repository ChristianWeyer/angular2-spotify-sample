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
var SearchComponent = (function () {
    function SearchComponent(service) {
        this.service = service;
    }
    SearchComponent.prototype.searchArtist = function ($event, searchValue) {
        var _this = this;
        if (!searchValue.value) {
            return;
        }
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(function () {
            _this.service.searchArtist(searchValue.value)
                .then(fetch_1.status)
                .then(fetch_1.json)
                .then(function (response) {
                _this.setResults(response.artists.items);
            });
        }, 250);
    };
    SearchComponent.prototype.setResults = function (artists) {
        this.artists = artists;
    };
    SearchComponent = __decorate([
        angular2_1.Component({
            selector: 'search'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgIf, router_1.RouterLink],
            templateUrl: 'app/components/search/search.html'
        }), 
        __metadata('design:paramtypes', [spotify_1.SpotifyService])
    ], SearchComponent);
    return SearchComponent;
})();
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.js.map