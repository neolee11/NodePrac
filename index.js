/**
 * Created by Weili on 3/12/2015.
 */


var express = require('express');

var app = express();

app.get('/', function(req, res){
   res.send('Welcome to express!');
});

app.get('/customers', function (req, res) {
    res.send('Customers section!');
});

app.listen(3000);