var App = {
  albumsLoaded: function() {

  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.albums.fetch({ // fetch data for collection from server
      success: this.albumsLoaded.bind(this)
    });
  },
  init: function() {
    this.fetchAlbums();
  }
};
