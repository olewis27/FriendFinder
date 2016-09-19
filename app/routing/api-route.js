// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var Friends = require('../data/friends.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function(req, res){
		res.json(Friends);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){

    var userData = req.body;
		var totalDifference = 0;
		var allDifferences = [];

	//Loop through all of the stored friends (minus one because the last stored friend is the current user)
	for (var i=0; i<(friends.length-1); i++){

		//Loop through all of question values and sum total their subtracted absolute values
		for (var j=0; j<10; j++){
			totalDifference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
		}

		allDifferences.push(totalDifference);
		totalDifference = 0;
	}

	//Give the smallest value in the array
	var bestMatch = friends[allDifferences.indexOf(Math.min.apply(null, allDifferences))];

	res.send(bestMatch);


	});
}
