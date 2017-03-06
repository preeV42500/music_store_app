var LoginView = Backbone.View.extend({
  template: App.templates.login,
  events: {
    "submit": "loginUser"
  },
  loginUser: function(e) {
    e.preventDefault();
    var $form = this.$("form");
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        if (json.id) {
          App.user.login({
            id: json.id,
            username: json.username,
            cart: json.cart,
            orders: json.orders
          });
          // merge items from user's cart into App.cart
          App.cart.mergeItems(json.cart);
          router.navigate("/", {trigger: true}); // return to index view
          App.setMessage(json.message);
        } else {
          // display error message
          App.setMessage(json.message);
        }
      }
    });
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
