var path = require("path");
var fs = require("fs");
var _ = require("underscore");
var file_path = path.resolve(path.dirname(__dirname), "data/users.json");

var Users = {
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).data;
  },
  usernameExists: function(user) {
    var users = this.get();
    return _(users).findWhere({username: user.username});
  },
  addOrUpdate: function(user) {
    var users = this.get();
    if(user.id) { // if user already exists
      var existing_user = this.findByID(user);
      existing_user.cart = user.cart; // update cart property
    } else {
      user.id = this.nextID();
      user.orders = [];
      users.push(user); // add user to users list
    }
    this.set(users); // rewrite users.json with updated data
  },
  findByID: function(user) {
    return _(this.get()).findWhere({ id: user.id });
  },
  find: function(user) { // find user by username and password
    var users = this.get();
    return _(users).findWhere({username: user.username, password: user.password});
  },
  set: function(users) {
    var id = users[users.length - 1].id;
    fs.writeFileSync(file_path, JSON.stringify({last_id: id, data: users}), "utf8");
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id;
  },
  nextID: function() {
    return this.getLastID() + 1;
  }
};

module.exports = Users;
