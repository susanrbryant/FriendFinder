// ==============================================================================
// DEPENDENCIES
// basic npm packages that we need to run
// ==============================================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8087;

// Sets up the Express app to handle data json parsing
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// OR
// app.use(bodyParser.text());

// ================================================================================
// ROUTER
// Below points our server to a series of "route" files.
// Giving our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//require("./app/routes/apiRoutes")(app);
//require("./app/routes/htmlRoutes")(app);

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// =============================================================================
// EXTRA STATIC FILES
// Adding CSS or Images etc...
// =============================================================================
app.use(express.static(path.join(__dirname, './app/public')));


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});