var fs = require('fs');
var p = require('path');
var res = undefined;

fs.readdir(process.argv[2], function(err, list) {
  for (var i = 0; i < list.length; i++) {
    if(p.extname(list[i]) == "." + process.argv[3]){
      console.log(list[i]);
    }
  }
});
