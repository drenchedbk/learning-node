var fs = require('fs');
var res = undefined;

fs.readFile(process.argv[2], 'utf8', function(err, fileContents) {
  res = fileContents.split('\n').length - 1;
  console.log(res);
});
