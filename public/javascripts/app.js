var App = {
  albumsLoaded: function() {
    this.view.render();
  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.view = new AlbumsView({ collection: this.albums });
    this.albums.fetch({ // fetch data for collection from server
      success: this.albumsLoaded.bind(this)
    });
  },
  tracksLoaded: function(tracks) { // create new tracks view and render it
    var tracks_modal = new TracksView({
      album: this.selected_album.toJSON(),
      collection: tracks
    });

    tracks_modal.render();
    this.tracks = tracks_modal; // store tracks view as property on App object
  },
  fetchTracks: function(name) {
    var tracks = new (Tracks.extend({
      url: '/albums/' + name + '.json' // use url based on album name to fetch data from the server
    }))();

    this.selected_album = this.albums.findWhere({ title: name }); // store property on App object of album with the specified name

    tracks.fetch({
      success: this.tracksLoaded.bind(this)
    });
  },
  init: function() {
    this.fetchAlbums();
  }
};

var Router = Backbone.Router.extend({
  routes: {
    'albums/:name': 'getAlbum'
  },
  getAlbum: function(name) { // fetch tracks corresponding to album
    App.fetchTracks(name);
  },
  index: function() {
    if (!App.tracks.$el.is(":animated")) {
      App.tracks.fadeOut(); // fade out tracks modal
    }
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index); // manually create route that begins with /
  }
});

var router = new Router();

Backbone.history.start({
  pushState: true,
  silent: true
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  // navigate to route in clicked anchor's href attribute, trigger associated router callback
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), {trigger: true})
});
