// /* ---------------------------------------------
//   LOAD DATA
//   Link the routes to a series of "data" sources
// --------------------------------------------- */

var friends = require('../data/friends.js');

// /* ---------------------------------------------
//   ROUTING
//   In each of the below cases the user is shown a JSON of the data in the table
// --------------------------------------------- */

module.exports = function(app){

  // GET route to display JSON of all possible friends currently in friends.js
  app.get('/api/friends', function(req,res){
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ------------------------------------------
  app.post('/api/friends', function(req,res){
    
    // Get friend scores to compare with friends in friends array
    var friendScore = req.body.scores;
    
    // Initialize varaible for storing scores
    var userScores = [];
    var bestMatch = 0;

    // Loop through all current friends in friends.js
    for (var i = 0; i < friends.length; i++) {
      var difference = 0;

      // Loop through scores to compare friends
      for (var j = 0; j < friendScore.length; j++) {
        difference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScore[j])));
      }

      // Push results into userScores
      userScores.push(difference);
    }

    // After all comparisons are made, loop through scores to find the best match
    for (var i = 0; i < userScores.length; i++) {
      if (userScores[i] <= userScores[bestMatch]) {
        bestMatch = i;
      }
    }

    // Return new friend
    var newFriend = friends[bestMatch];
    res.json(newFriend);

    // Push new friend into the friends array
    friends.push(req.body);
  });
};