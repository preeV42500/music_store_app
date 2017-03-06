var SignupView = Backbone.View.extend({
  template: App.templates.signup,
  events: {
    "submit": "signupUser"
  },
  signupUser: function(e) {
    e.preventDefault();
    var $form = this.$("form");
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        if(json.id) {
          App.user.login({
            id: json.id,
            username: json.username,
            orders: json.orders
          });
          router.navigate("/", {trigger: true});
          App.setMessage(json.message);
        } else {
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
