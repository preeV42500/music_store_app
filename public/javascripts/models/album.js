var Album = Backbone.Model.extend({
  parse: function(attrs) { // parse callback adds tracks_url property to model attributes
    attrs.tracks_url = "/album/" + attrs.title;
    return attrs;
  }
});
