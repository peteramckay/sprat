/*

Sprat
Copyright (c) 2016 Peter McKay
Free to use under the MIT license

*/

var express = require('express');
var app = express();

// Turning off database options for now...

// var mongo = require('mongoskin');
// var Db = mongo.Db;

var oneDay = 86400000; 

app.use(express.static(__dirname + '/ui_assets', { maxAge: oneDay })); // Serve up site content...

app.listen(process.env.PORT || 8080);

console.log('Eureka! Server is running at port 8080.');
