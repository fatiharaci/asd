//console.log("Hello hacım")
var http = require("http");
// installs express package (first install it with npm)
var express = require('express');

http.createServer (function (request,response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello Hacim\n');
}).listen(8081);




// Get a File From Outside
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");
// Get a File From Outside





// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


