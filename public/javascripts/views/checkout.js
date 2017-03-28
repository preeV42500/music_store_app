var CheckoutView = Backbone.View.extend({
  template: App.templates.checkout,
  attributes: {
    id: "checkout"
  },
  events: {
    "click a.placeorder": "newOrder",
    "click a.deleteitem": "removeItem",
    "click a.home": "homepage",
    "change input": "updateQuantity"
  },
  newOrder: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var data_obj = {
      user: {
        id: App.user.get("id")
      },
      cart: App.cart.getCart(),
      quantity: App.cart.getQuantity(),
      total: App.cart.getTotal()
    };

    $.ajax({
      url: $(e.target).attr("href"),
      type: "post",
      data: JSON.stringify(data_obj),
      contentType: "application/json",
      success: function(json) {
        App.cart.reset();
        App.cart.update();
        router.navigate("/", {trigger:true});
        App.setMessage(json.message);
      }
    });
  },
  removeItem: function(e) {
    e.preventDefault();
    this.collection.trigger("destroy", +$(e.target).attr("data-id"));
  },
  homepage: function(e) {
    e.preventDefault();
    this.remove();
  },
  updateQuantity: function(e) {
    e.preventDefault();
    var new_quantity = +$(e.target).val();
    var id = +$(e.target).closest("div").prev().attr("data-id");
    this.collection.updateItemQuantity(id, new_quantity);
  },
  renderCheckout: function() {
    this.remove();
    App.trigger("checkout");
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      quantity: this.collection.getQuantity(),
      total: this.collection.getTotal()
    }));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.renderCheckout);
  }
});
