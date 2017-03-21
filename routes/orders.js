var path = require("path");
var _ = require("underscore");
var Users = require(path.resolve(path.dirname(__dirname), "local_modules/users_module"));
var Orders = require(path.resolve(path.dirname(__dirname), "local_modules/orders_module"));

module.exports = function(router) {
  router.post("/orders/new", function(req, res) {
    var orders = Orders.get();
    var order_id = Orders.nextID();
    var order_date = (new Date()).toUTCString();
    var order = {
      id: order_id,
      date: order_date,
      quantity: req.body.quantity,
      total: req.body.total,
      items: req.body.cart
    };
    orders.push(order);
    Orders.set(orders);

    var users = Users.get();
    var user = Users.findByID(users, req.body.user);
    user.orders.push(Orders.getLastID());
    Users.set(users);

    res.json(order);
  });
};
