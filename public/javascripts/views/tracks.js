var $overlay = $("#overlay");
var Tracks = Backbone.View.extend({
  duration: 300,
  template: Handlebars.compile($("[data-name=tracks]").html()),
  open: function() {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  close: function(e) {
    e.preventDefault();
    this.fadeOut();
  },
  fadeOut: function() {
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render: function() {
    this.$el.html(this.template({
      album: this.album,
      tracks: this.collection.toJSON()
    }));
    this.open();
  },
  initialize: function(options) {
    this.album = options.album; // store album property passed into view constructor as album property on view
    this.$el.appendTo(document.body);
  }
});
