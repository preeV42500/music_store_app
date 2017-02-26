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
    var self = this;
    $.ajax({
      url: $(e.target).attr("href"),
      type: "get",
      data: { order_id: self.model.id },
      success: function(json) {
        // call method on the App object that will create order views
      }
    });
  },
  logoutUser: function(e) {
    e.preventDefault();
    this.model.logout();
    // clear/reset cart
    App.indexView(); // return to index view
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render);
  }
});
