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

    res.json({
      message: "<p class='success'>Thanks for placing your order!</p>"
    });
  });

  router.get("/orders/:user_id", function(req, res) {
    var user = Users.findByID(Users.get(), {id: req.params.user_id});
    var all_orders = Orders.get();
    var order_list = user.orders.map(function(order_id) { // map order ids to orders
      return Orders.findByID(all_orders, {id: order_id});
    }).sort(function(order1, order2) {
      return Date.parse(order2.date) - Date.parse(order1.date);
    }); // sort by order date
    res.json({
      orders: order_list
    });
  });
};
