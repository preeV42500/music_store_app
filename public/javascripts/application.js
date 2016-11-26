var App = {
  templates: JST,
  $el: $("main"), // holds reference to parent element
  indexView: function() {
    this.index = new IndexView();
    this.renderAlbums();
    this.createCart();
    this.bindEvents();
  },
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView); // render album view for each model in the collection
  },
  createCart: function() {
    this.cart = new CartItems(); // create cart collection and cart view
    this.cart.view = new CartView({collection: this.cart});
  },
  renderAlbumView: function(album) {
    new AlbumView({
      model: album
    });
  },
  newAlbum: function() { // create and render new album view
    new NewAlbumView();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, "add_album", this.newAlbum); // listen for add_album event on index view
    this.on("add_to_cart", this.cart.addItem.bind(this.cart));
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});
