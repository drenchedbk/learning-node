var net = require("net");

var server = net.createServer(function(socket) {
  //Handle Socket
  var d = new Date();

  var time = zeroFill(d.getFullYear(),4)
    + "-" + zeroFill(d.getMonth() + 1,2)
    + "-" + zeroFill(d.getDate(),2)
    + " " + zeroFill(d.getHours(),2)
    + ":" + zeroFill(d.getMinutes(), 2) + "\n";
  socket.end(time);
});

function zeroFill(value, len){
  return ("0000" + value.toString()).substr(-1 * len);
}

server.listen(Number(process.argv[2]));
