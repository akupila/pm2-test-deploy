// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>App 2</h1>\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT, function() {
  console.log('App 2 listening on port ' + process.env.PORT);
});
