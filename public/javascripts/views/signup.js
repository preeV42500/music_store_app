var SignupView = Backbone.View.extend({
  template: App.templates.signup,
  events: {
    "submit": "createUser"
  },
  createUser: function() {

  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
