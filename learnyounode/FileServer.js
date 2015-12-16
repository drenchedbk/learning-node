var http = require("http");
var fs = require("fs");
var file = process.argv[3];

var server = http.createServer(function(req, res) {
  var fileStream = fs.createReadStream(file);

  res.writeHead(200, {'content-type': 'text/plain'});
  fileStream.pipe(res);
});

server.listen(Number(process.argv[2]));
