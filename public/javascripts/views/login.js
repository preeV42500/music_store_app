var LoginView = Backbone.View.extend({
  template: App.templates.login,
  events: {
    "submit": "loginUser"
  },
  loginUser: function(e) {
    e.preventDefault();
    var $form = this.$("form");
    var self = this;
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        
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
