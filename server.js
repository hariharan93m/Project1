var express  = require('express');
var app      = express();
var session  = require('express-session');
var nextFile = require('./Nextfile');
//Nodemailer for sending password reset emails
var nodemailer = require('nodemailer');
// Passport for user authentication
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');
var crypto = require('crypto')
var cookieParser = require('cookie-parser')

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session({
	secret : 'keyboard cat',
	resave : false,
	saveUninitialized : true
}));
app.get('/',nextFile.getHtml);
app.get('/getJson',nextFile.getJson);
app.get('/formsubmit',nextFile.formsubmit);
app.get('/dropdown',nextFile.dropdown);
var server = app.listen(3020, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});