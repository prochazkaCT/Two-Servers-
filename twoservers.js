var http = require("http");

http.createServer(function (request, response) {
    response.end("Good job accessing the port! You rule! " + request.url);
}).listen(7000, function () {
    console.log("Server listening on http://localhost:7000");
});

http.createServer(function (requestTwo, responseTwo) {
    responseTwo.end("You should keep studying harder - you suck! " + requestTwo.url);
}).listen(7500, function (){
    console.log("Server listening on http://localhost:7500");
});