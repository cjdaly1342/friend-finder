// Friend Finder - apiRoutes
// ===================================================================================

// Dependencies
// ===================================================================================
// npm install path
var path = require('path');

// Imports friends list
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	}); // End module.exports = function(app)

	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		var userResponse = uesrInput.scores;
		var matchName = ' ';
		var matchImage = ' ';
		var totalDiff = 10000; // Make the initial value big for comparison

		for (var i = 0; i < friends.length; i++) {
			console.log('Friend: ' + JSON.stringify(friends[i]));
			var diff = 0;
			for (var j = 0; j < userResponse.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponse[j]);
			}; // End for (var j =0)

			if (diff < totalDiff) {
				totalDiff = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
				//console.log("Name: " + matchName);
				//console.log("Picture: " matchImage);
			}
		}

		// Pushes new users (friends)
		friends.push(userInput);

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	}); // End add.post('/api/friends', function(req, res)) 
}; // End module.exports = function(app)