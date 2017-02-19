var LoginView = Backbone.View.extend({
  template: App.templates.login,
  events: {
    "submit": "findUser"
  },
  findUser: function() {

  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
