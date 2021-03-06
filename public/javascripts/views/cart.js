var CartView = Backbone.View.extend({
  template: App.templates.cart,
  el: $("#cart").get(0),
  events: {
    "click a.remove": "destroy",
    "click a.checkout": "confirmOrder"
  },
  confirmOrder: function(e) {
    e.preventDefault();
    $("#cart_toggle").prop("checked", false);
    if (!App.user.get("id")) {
      App.trigger("login");
    } else {
      App.trigger("checkout");
    }
  },
  destroy: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    this.collection.trigger("destroy", +$e.attr("data-id")); // remove model from the collection
    // and re-render the view
  },
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.render); // when the collection is updated, re-render the view
  }
});
