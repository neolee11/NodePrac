/**
 * Created by 31611 on 3/11/2015.
 */

var os = require('os');

console.log(os.hostname());
console.log(os.totalmem() / 1024 / 1024 / 1024);


var request = require('request');

request('http://www.cnn.com', function (error, response, body) {
    if(!error && response.statusCode === 200){
        console.log(body);
    }
});



function test(){

}