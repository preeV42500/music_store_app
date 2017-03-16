var AlbumView = Backbone.View.extend({
  tagName: "li",
  events: {
    "click a.add": "addToCart",
    "click a.edit": "editAlbum",
    "click a.delete": "deleteAlbum"
  },
  template: App.templates.album,
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("add_to_cart", this.model);
  },
  editAlbum: function(e) {
    e.preventDefault();
    App.trigger("edit_album", this.model);
  },
  deleteAlbum: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $.ajax({
      url: $(e.target).attr("href"),
      type: "delete",
      success: function(json) {
        App.albums.remove(json.id);
        if (App.cart.get(json.id)) {
          App.cart.remove(json.id);
          App.cart.update();
        }
        App.indexView();
      }
    });
  },
  render: function() {
    var id = this.model.get("id");

    this.$el.attr("id", "album_" + id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("ul"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});
