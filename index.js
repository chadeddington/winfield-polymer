var express = require('express');
var app = express();
var clients = require('./controllers/clients');
var tasks = require('./controllers/tasks');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

// Set the template engine
app.set('view engine', 'ejs');

// Base route
app.get('/', function(request, response) {
  response.render('home');
});

app.get('/clients', clients);
app.get('/tasks', tasks);

// Tasks route
app.get('/tasks', function(request, response) {
	response.render('pages/tasks');
});

// Server starts listening
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});