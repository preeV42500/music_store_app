var Album = Backbone.Model.extend({
  parse: function(attrs) { // parse callback adds track_url property to model attributes
    attrs.track_url = "/album/" + attrs.title;
    return attrs;
  }
});
