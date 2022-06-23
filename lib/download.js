const download = require('download-git-repo');

module.exports = function(dest, fn) {
  download('simpul/vat-template', dest, { clone: false }, err => {
    fn && fn(err);
  });
}