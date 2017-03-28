var User = Backbone.Model.extend({
  login: function(user_attrs) {
    this.set(user_attrs);
    this.updateStorage();
    this.trigger("user_updated");
  },
  logout: function() { // remove user from localStorage and clear user attributes
    this.clear();
    this.updateStorage();
    this.trigger("user_updated");
  },
  updateStorage: function() {
    localStorage.setItem("user", JSON.stringify(this.toJSON()));
  },
  readStorage: function() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.set(user);
  },
  isAdmin: function() {
    return this.get("username") === "admin";
  },
  initialize: function() {
    this.readStorage();
  }
});
