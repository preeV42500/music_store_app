var UserView = Backbone.View.extend({
  template: App.templates.user,
  el: $("#user_options").get(0),
  events: {
    "click a.orders": "viewOrders",
    "click a.logout": "logoutUser"
  },
  viewOrders: function(e) { // get orders corresponding to user id
    e.preventDefault();
    e.stopImmediatePropagation();
    $("#user_toggle").prop("checked", false);
    $.ajax({
      url: $(e.target).attr("href"),
      type: "get",
      success: function(json) {
        // trigger event on the App object that will create OrderView
        App.trigger("view_orders", json.orders);
      }
    });
    App.trigger("clear_checkout");
  },
  logoutUser: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    var self = this;
    var data_obj = {
      id: App.user.get("id"),
      cart: App.cart.getCart()
    };

    $.ajax({
      url: $(e.target).attr("href"),
      type: "put",
      data: {
        user: JSON.stringify(data_obj)
      },
      success: function(json) {
        self.model.logout();
        App.cart.reset(); // reset cart
        App.cart.update();
        router.navigate("/", {trigger:true}); // return to index view
        App.setMessage(json.message);
      }
    });
    App.trigger("clear_checkout");
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, "user_updated", this.render);
  }
});
