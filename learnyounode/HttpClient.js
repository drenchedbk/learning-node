var http = require('http');

http.get(process.argv[2], callback);

function  callback(response) {
  response.setEncoding("utf8");
  response.on("error", function(err){console.log("Error : " + err);});
  response.on("data", function(data){console.log(data);});
}
