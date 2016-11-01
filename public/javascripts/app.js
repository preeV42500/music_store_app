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
  init: function() {
    this.fetchAlbums();
  }
};
