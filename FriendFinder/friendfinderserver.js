// DEPENDENCIES
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// EXPRESS CONFIGURATION
// ==============================================================================

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require('./app/routing/api-route.js')(app);
require('./app/routing/html-route.js')(app);

// LISTENER
// ==============================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
