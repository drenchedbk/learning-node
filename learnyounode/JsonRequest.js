var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var p = url.parse(req.url, true);
  var jsonResponse = undefined;

  if(p.pathname == "/api/parsetime"){
    var d = new Date(p.query["iso"]);

    var j = JSON.stringify({"hour":d.getHours(), "minute":d.getMinutes(), "second": d.getSeconds()})
    res.end(j);
    //console.log(j);
  }
  else if(p.pathname == '/api/unixtime') {
    var d = new Date(p.query["iso"]);
    var j = JSON.stringify({"unixtime": d.getTime()});

    res.end(j);
    //var j = JSON.stringify({"unixtime":Date.UTC(d)})

    //console.log(j);
  }
  else {
    jsonResponse = "Invalid Url";
  }

});

server.listen(Number(process.argv[2]));
