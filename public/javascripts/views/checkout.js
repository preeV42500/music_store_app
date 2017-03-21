var CheckoutView = Backbone.View.extend({
  template: App.templates.checkout,
  attributes: {
    id: "checkout"
  },
  events: {

  },
  newOrder: function(e) {
    e.preventDefault();
    var data_obj = {
      user: {
        id: App.user.get("id")
      },
      cart: this.collection.toJSON(),
      quantity: this.collection.getQuantity(),
      total: this.collection.getTotal()
    };

    $.ajax({
      url: $(e.target).attr("href"),
      type: "post",
      data: JSON.stringify(data_obj),
      contentType: "application/json",
      success: function(json) {
        console.log(json);
      }
    });

  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      quantity: this.collection.getQuantity(),
      total: this.collection.getTotal()
    }));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "change", this.render);
  }
});
