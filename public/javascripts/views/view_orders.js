var OrdersView = Backbone.View.extend({
  template: App.templates.view_orders,
  attributes: {
    id: "view_orders"
  },
  events: {
    "click a.button": "homepage"
  },
  homepage: function(e) {
    e.preventDefault();
    App.indexView();
  },
  render: function() {
    this.$el.html(this.template({
      orders: this.collection.toJSON()
    }));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
