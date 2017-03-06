var App = {
  templates: JST,
  $el: $("main"), // holds reference to parent element
  indexView: function() {
    this.index = new IndexView();
    this.renderAlbums();
    this.createCart();
    this.createUserView();
    this.bindEvents();
  },
  createUserView: function() {
    this.user = new User();
    new UserView({
      model: this.user
    });
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
  loginView: function() { // create and render login view
    new LoginView({
      model: this.user
    });
  },
  signupView: function() { // create and render signup view
    new SignupView();
  },
  setMessage: function(msg) {
    this.$el.prepend(msg);
    this.$el.find("p:first").slideDown("slow").delay(5000).slideUp();
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
