var App = {
  templates: JST,
  $el: $("main"), // holds reference to parent element
  indexView: function() {
    this.index = new IndexView();
    this.renderAlbums();
    this.clearCheckout();
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
    this.clearCheckout();
    this.checkout = new CheckoutView({
      collection: this.cart
    });
  },
  ordersView: function(orders) {
    new OrdersView({
      collection: (new Backbone.Collection(orders))
    });
  },
  clearCheckout: function() {
    if (this.checkout) { // if checkout view already exists,
      this.checkout.remove(); // remove it to stop listening for events before creating new one
    }
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
    this.on("view_orders", this.ordersView);
    this.on("clear_checkout", this.clearCheckout);
  },
  init: function() {
    this.createUserView();
    this.createCart();
    this.bindEvents();
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
