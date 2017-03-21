var path = require("path");
var fs = require("fs");
var _ = require("underscore");
var file_path = path.resolve(path.dirname(__dirname), "data/orders.json");

var Orders = {
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).data;
  },
  findByID: function(list, order) {
    return _(list).findWhere({ id: +order.id });
  },
  set: function(orders) {
    var id = orders[orders.length - 1].id;
    fs.writeFileSync(file_path, JSON.stringify({last_id: id, data: orders}), "utf8");
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id;
  },
  nextID: function() {
    return this.getLastID() + 1;
  }
};

module.exports = Orders;
