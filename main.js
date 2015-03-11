/**
 *
 * Created by 31611 on 3/11/2015.
 */

//setTimeout(function () {
//    console.log("hello world");
//}, 500);


//var http = require('http');
//var port = 1337;
//
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World from node\n');
//}).listen(port);
//
//console.log('Server running');

var doSomething = function (value, callBack) {
    var waitTime = 2000;

    setTimeout(function () {
        var result = value * 10;
        callBack(null, value, result);
    }, waitTime);
}


var resultHandler = function(err, input, result) {
    if(!err)
        console.log(input + " x 10 = " + result );
};

doSomething(3, resultHandler);

console.log("print something");






