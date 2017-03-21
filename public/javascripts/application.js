var App = {
  templates: JST,
  $el: $("main"), // holds reference to parent element
  indexView: function() {
    this.user = new User();
    this.index = new IndexView();
    this.createCart();
    this.createUserView();
    this.renderAlbums();
    this.bindEvents();
  },
  createUserView: function() {
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
  editAlbum: function(album) {
    new EditAlbumView({
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
  checkoutView: function() {
    new CheckoutView({
      collection: this.cart
    });
  },
  setMessage: function(msg) {
    this.$el.prepend(msg);
    this.$el.find("p:first").slideDown("slow").delay(5000).slideUp();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, "add_album", this.newAlbum); // listen for add_album event on index view
    this.on("add_to_cart", this.cart.addItem.bind(this.cart));
    this.on("edit_album", this.editAlbum);
    this.on("checkout", this.checkoutView);
    this.on("login", this.loginView);
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

Handlebars.registerHelper("isAdmin", function(options) {
  if (App.user.isAdmin()) {
    return options.fn(this);
  }
});

Handlebars.registerHelper("subtotal", function(price, quantity) {
  return (+price * +quantity).toFixed(2);
});
