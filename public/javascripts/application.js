var App = {
  templates: JST,
  $el: $("main"), // holds reference to parent element
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView); // render album view for each model in the collection
  },
  renderAlbumView: function(album) {
    new AlbumView({
      model: album
    });
  },
  init: function() {
    this.renderAlbums();
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});
