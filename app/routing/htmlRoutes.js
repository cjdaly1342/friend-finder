// Friend Finder - Dependencies
// ===================================================================================
// npm install path
var path = require('path');

// HTML Routes
module.exports = function(app) {
	console.log('HTML Routes');
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	}); // End app.get('/', function(req, res) {})

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	}); // End app.get('/survey', function(req, res) {})

}; // End module.exports = function(app)