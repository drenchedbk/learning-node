var bl = require('bl');
var http = require('http');

http.get(process.argv[2], callback);

function  callback(response) {
  response.setEncoding("utf8");
  response.pipe(bl(function(err,data){console.log(data.length); console.log(data.toString());}));
  // response.on("error", function(err){console.log("Error : " + err);});
  // response.on("data", function(data){console.log(data);});
}
