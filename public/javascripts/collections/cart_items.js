var CartItems = Backbone.Collection.extend({
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);

    return this; // return collection to chain method calls
  },
  getTotal: function() { return this.total; },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b) {
      return a + b.quantity;
    }, 0);

    return this;
  },
  getQuantity: function() { return this.quantity; },
  readStorage: function() { // read data from localStorage to set as collection data
    var stored_cart = JSON.parse(localStorage.getItem("cart"));
    this.reset(stored_cart);
    this.setTotal().setQuantity();
  },
  updateStorage: function() { // write cart data to localStorage
    localStorage.setItem("cart", JSON.stringify(this.toJSON()));
  },
  addItem: function(item) {
    var existing = this.get(item.get("id")); // check for existing item
    if (existing) {
      existing.set("quantity", existing.get("quantity") + 1); // if there is an existing item, increment its quantity
    }
    else { // else clone the passed in model and set its quantity to 1
      existing = item.clone();
      existing.set("quantity", 1);
      this.add(existing);
    }
    this.update();
    this.trigger("cart_updated");
  },
  mergeItems: function(user_cart) {
    var self = this;
    user_cart.forEach(function(current_item) {
      // if item is not already in App.cart, add it
      if(!(self.get(current_item.id))) {
        self.add(current_item);
      }
    });
    this.update();
  },
  getCart: function() {
    return this.toJSON();
  },
  destroy: function(id) {
    this.remove(id);
    this.update();
    this.trigger("cart_updated");
  },
  updateItemQuantity: function(id, quantity) {
    var item = this.get(id);
    item.set("quantity", quantity);
    this.update();
    this.trigger("cart_updated");
  },
  update: function() { // update localStorage when items are added or deleted
    this.setTotal().setQuantity().updateStorage();
  },
  initialize: function() {
    this.readStorage();
    this.on("destroy", this.destroy);
  }
});
