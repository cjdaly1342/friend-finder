// Friend Finder - server.js page, Used to call in the server used for this application
// ======================================================================================

// Dependencies
// npm install express
var express = require('express');
// npm install body-parser
var bodyParser = require('body-parser');
// npm install path
var path = require('path');

// Sets up the Express application
var app = express();
var PORT = 3000;

// Sets up the Express Application to handle data parsing
app.use(express.static(path.join(__dirname, './app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Starts the PORT listening
app.listen(process.env.PORT || PORT, function() {
	console.log('Friend Finder App is Listening on PORT: ' + PORT);
}); // End app.listen(PORT, function() {})