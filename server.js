var express  = require('express');
var app      = express();

var nextFile = require('./Nextfile');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/',nextFile.getHtml);
app.get('/getJson',nextFile.getJson);
app.get('/formsubmit',nextFile.formsubmit);
var server = app.listen(3020, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});



