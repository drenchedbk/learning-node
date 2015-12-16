
var fs = require('fs');
var p = require('path');

export function proc(dir, ext, callback) {
  var res = undefined;

  fs.readdir(dir, function(err, list) {
    var ret = new Array();

    for (var i = 0; i < list.length; i++) {
      if(p.extname(list[i]) == "." + ext){
        ret.push(list[i]);
      }
    }

    return callback(null,ret);
  });
}
