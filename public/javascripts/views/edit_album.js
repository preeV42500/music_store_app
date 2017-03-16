var EditAlbumView = Backbone.View.extend({
  template: App.templates.edit_album,
  attributes: {
    id: "album_edit"
  },
  events: {
    "submit": "update"
  },
  update: function(e) {
    e.preventDefault();
    var $form = this.$("form");
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        App.albums.add(json, {merge: true});
        if (App.cart.get(json.id)) {
          App.cart.add(json, {merge: true});
          App.cart.update();
        }
        router.navigate("/", {trigger: true});
      }
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
