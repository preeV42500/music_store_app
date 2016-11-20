var path = require("path");
var fs = require("fs");
var file_path = path.resolve(path.dirname(__dirname), "data/albums.json");

function getAlbums() {
  return JSON.parse(fs.readFileSync(file_path, "utf8")).data;
}

function writeAlbums(data) {
  fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
}

var Albums = {
  get: function() {
    return getAlbums();
  },
  set: function(albums) {
    var id = albums[albums.length - 1].id;
    writeAlbums({ last_id: id, data: albums }); // rewrite albums.json
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id;
  },
  nextID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id + 1;
  }

};

module.exports = Albums;
