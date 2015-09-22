/// <reference path="../../typings/_custom.d.ts" />
var SpotifyService = (function () {
    function SpotifyService() {
        this.url = 'https://api.spotify.com/v1/';
    }
    SpotifyService.prototype.searchArtist = function (value) {
        return window.fetch(this.url + 'search?type=artist&q=' + value);
    };
    SpotifyService.prototype.getArtistById = function (id) {
        return window.fetch(this.url + 'artists/' + id);
    };
    return SpotifyService;
})();
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.js.map