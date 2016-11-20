var path = require('path');
var _ = require('underscore');
var albums_module = require(path.resolve(path.dirname(__dirname), 'local_modules/albums_module'));

module.exports = function(router) {
  router.post('/albums', function(req, res) {
    var album = req.body;
    var albums = albums_module.get();

    album.id = albums_module.nextID(); // add id to new album
    albums.push(album);
    albums_module.set(albums); // rewrite albums.json file with updated last_id and data
    res.json(album);
  });
  router.get('/albums/new', function(req, res) {
    res.render('new');
  });
  router.put('/albums/:album_id', function(req, res) {
    var album_id = +req.params.album_id;
    var albums = albums_module.get();
    var current_album = _(albums).findWhere({id: album_id});

    for (var prop in req.body) { // overwrite properties on current album
      current_album[prop] = req.body[prop];
    }

    albums_module.set(albums);
    res.json(current_album);
  });
  router.delete('/albums/:album_id', function(req, res) {
    var album_id = +req.params.album_id;
    var albums = albums_module.get();
    albums = _(albums).reject(function(album) {
      return album.id === album_id;
    });
    albums_module.set(albums);
    res.status(200).end();
  });
};
