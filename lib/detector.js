'use strict';

var typeMap = {};
var types = require('./types');

// load all available handlers
//types.forEach(function (type) {
//  typeMap[type] = require('./types/' + type).detect;
//});
typeMap['bmp'] = require('./types/bmp').detect;
typeMap['gif'] = require('./types/gif').detect;
typeMap['jpg'] = require('./types/jpg').detect;
typeMap['png'] = require('./types/png').detect;
typeMap['psd'] = require('./types/psd').detect;
typeMap['svg'] = require('./types/svg').detect;
typeMap['tiff'] = require('./types/tiff').detect;
typeMap['webp'] = require('./types/webp').detect;

module.exports = function (buffer, filepath) {
  var type, result;
  for (type in typeMap) {
    result = typeMap[type](buffer, filepath);
    if (result) {
      return type;
    }
  }
};
