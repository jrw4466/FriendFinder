// ======================================================
// DEPENDENCIES
// NPM packages to give our server useful functionality
// ======================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ======================================================
// EXPRESS CONFIGURATION
// Sets up the basic propoerties of the express serever
//=======================================================

// Tells node that wew are creating an "express" server
var app = express();

// Sets an intial port for server listener.
// Variable formated for Heroku hosting
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to 
//   interpret data sent to it. Standard code.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =====================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond 
// 	when users visit or request data from various URLs.
// ======================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ======================================================
// LISTENER
// The below code effectively "starts" our server
// ======================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});