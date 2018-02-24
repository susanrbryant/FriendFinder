// ===============================================================================
// LOAD DATA
// Linking route to a "data" sources. (friends.js)
// Which holds an array of friends
// ===============================================================================
var path = require('path');

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {

    // API GET Requests - Displays a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

// Do the calculations

app.post("/api/friends", function(req, res) {

res.json({name : "Lou Ritter", image : "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg"})

    // API POST Routes - Handles when user submits a form with data 
    // All so the compatibility logic
    // server. Data goes to /api/friends.js
    
        // "server" will respond to requests and let the user 
        // know who is there best matched friend






        // It will do this by sending out the value "true"
        // req.body is available since we're using the body-parser middleware
        //    if (friendsData.length < 5) {
        //        friendsData.push(req.body);
        //        res.json(true);
        //
    });

};