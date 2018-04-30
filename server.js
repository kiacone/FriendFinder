/* ---------------------------------------------
  DEPENDENCIES
  Series of npm packages used to give server useful functionality
--------------------------------------------- */
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

/* ---------------------------------------------
  EXPRESS CONFIGURATION
  This sets up the basic properties for the express server
--------------------------------------------- */

// Tells node to create an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));



app.use(express.static('app/public'));


/* ---------------------------------------------
  ROUTER
  Points the server to a series of "route" files
--------------------------------------------- */

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

/* ---------------------------------------------
  LISTENER
  The below code effectively "starts" the server
--------------------------------------------- */

app.listen(PORT, function() {
  console.log("App listening on: http://localhost:" + PORT);
});