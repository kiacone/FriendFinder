/* ---------------------------------------------
  DEPENDENCIES
  Include the path package to get the correct file path for the html
--------------------------------------------- */
var path = require("path");

/* ---------------------------------------------
  ROUTING
  In each of the below cases the user is shown an HTML page of content
--------------------------------------------- */

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};