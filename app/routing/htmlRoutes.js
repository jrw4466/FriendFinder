var friends = require('../data/friends.js');
var path = require('path');

// Routes
module.exports = function(app) {

    // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
 	app.use(function(req, res) {
 		res.sendFile(path.join(__dirname, "/../public/home.html"));
 	});

};