var path = require('path');
var albums_module = require(path.resolve(path.dirname(__dirname), 'local_modules/albums_module'));
module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      albums: albums_module.get()
    });
  });
};
