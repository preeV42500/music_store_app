var User = Backbone.Model.extend({
  login: function(user_attrs) {
    this.set(user_attrs);
    this.updateStorage();
  },
  logout: function() { // remove user from localStorage and clear user attributes
    localStorage.removeItem("user");
    this.clear();
  },
  updateStorage: function() {
    localStorage.setItem("user", JSON.stringify(this.toJSON()));
  },
  readStorage: function() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.set(user);
  },
  initialize: function() {
    this.readStorage();
  }
});
