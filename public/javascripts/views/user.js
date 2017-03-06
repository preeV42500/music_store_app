var UserView = Backbone.View.extend({
  template: App.templates.user,
  el: $("#user_options").get(0),
  events: {
    "click a.orders": "viewOrders",
    "click a.logout": "logoutUser"
  },
  viewOrders: function(e) {
    // get orders associated with model's id
    e.preventDefault();
    e.stopImmediatePropagation();
    var self = this;
    $.ajax({
      url: $(e.target).attr("href"),
      type: "get",
      data: { order_id: self.model.get("id") },
      success: function(json) {
        // call method on the App object that will create order views
      }
    });
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
        App.indexView(); // return to index view
        App.setMessage(json.message);
      }
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});
