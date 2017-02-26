var path = require('path');
var _ = require('underscore');
var Users = require(path.resolve(path.dirname(__dirname), 'local_modules/users_module'));

router.post("/signup", function(req, res) {
  var user = req.body;
  if(Users.usernameExists(user)) { // if username already exists in data
    res.json({
      message: "<p class='error'>That username is taken. Please try another.</p>"
    });
  } else {
    Users.addOrUpdate(user); // give new user an id and add user to data file
    res.json({
      id: user.id,
      username: user.username,
      orders: user.orders,
      message: "<p class='success'>Welcome, " + user.username + "!</p>"
    });
  }
});

router.get("/login", function(req, res) {
  // find the user by their username and password
  var user = Users.find(req.body);
  if (!user) { // if user cannot be found they entered the wrong username or password
    res.json({
      message: "<p class='error'>Wrong username or password. Please try again.</p>"
    });
  } else { // if user is found, send back json with id, username, cart, orders attrs
    res.json({
      id: user.id,
      username: user.username,
      cart: user.cart,
      orders: user.orders,
      message: "<p class='success'>Welcome back, " + user.username + "!</p>"
    });
  }
});

router.post("/logout", function(req, res) {
  // update cart property so that user's cart is preserved next time they log in
  Users.addOrUpdate(req.body);
  res.json({});
});
