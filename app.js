var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World Aliens"
   response.end('Hello Hacker How r u?\n');
}).listen(8080);

// Console will print the message
console.log('Server running at node http://0.0.0.0:8080/');
