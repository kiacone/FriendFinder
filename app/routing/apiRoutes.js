/* ---------------------------------------------
  LOAD DATA
  Link the routes to a series of "data" sources
--------------------------------------------- */

var path = require('path');
var friends = require ('../data/friends.js');

/* ---------------------------------------------
  ROUTING
  In each of the below cases the user is shown a JSON of the data in the table
--------------------------------------------- */

module.exports = function(app){

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ------------------------------------------

    app.post("/api/friends", function(req, res) {
      console.log(req.body.name);
        
      // Get friendScore to compare with data in friends array
      var friendScore = req.body.scores;
      console.log(friendScore);
      var scoresArray = [];
      var friendCount = 0;
      var bestMatch = 0;

    //runs through all current friends in list
    for (var i = 0; i < friends.length; i++) {
      var scoreDiff = 0;
      console.log(friends[i].name);
      
      //run through scores to compare friends
      for (var j = 0; j < FriendScore.length; j++) {
        scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScore[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoreDiff);
    }

    //after all friends are compared, find best match
    for (var i = 0; i < scoresArray.length; i++){
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }

    //return bestMatch data
    var theOne = friends[bestMatch];
    res.json(theOne);

    //pushes new submission into friendData array
    friends.push(req.body);
        

    });

}








// /* ---------------------------------------------
//   LOAD DATA
//   Link the routes to a series of "data" sources
// --------------------------------------------- */
// var friendsData = require("../data/friends.js");

// /* ---------------------------------------------
//   ROUTING
//   In each of the below cases the user is shown a JSON of the data in the table
// --------------------------------------------- */

// module.exports = function(app) {
//   app.get("/api/friends", function(req, res) {
//     res.json(friendsData);
//   });

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // ------------------------------------------

//   app.post("/api/friends", function(req, res) {
    
//     //Comparing user with their best friend match 

// //Object to hold the best match
// 		var bestMatch = {
// 			name: "",
// 			photoURL: "",
// 			friendDifference: 1000
// 		};

// 		// Here we take the result of the user's survey POST and parse it.
// 		var userData 	= req.body;
// 		var userName 	= userData.name;
// 		var userPhoto 	= userData.photoURL;
// 		var userScores 	= userData.scores;

// 		var totalDifference = 0;

// 		// Loop through all the friend possibilities in the database. 
// 		for  (var i=0; i< friendsData.length; i++) {

// 			console.log(friendsData[i].name);
// 			totalDifference = 0;

// 			// Loop through all the scores of each friend
// 			for (var j=0; j< friendsData[i].scores[j]; j++){

// 				// We calculate the difference between the scores and sum them into the totalDifference
// 				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

// 				// If the sum of differences is less then the differences of the current "best match"
// 				if (totalDifference <= bestMatch.friendDifference){

// 					// Reset the bestMatch to be the new friend. 
// 					bestMatch.name = friendsData[i].name;
// 					bestMatch.photo = friendsData[i].photoURL;
// 					bestMatch.friendDifference = totalDifference;
// 				}
// 			}
// 		}

// 		// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
// 		// the database will always return that the user is the user's best friend).
// 		friendsData.push(userData);

// 		// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
// 		res.json(bestMatch);

// 	});



    
  //   // Get friendScore to compare with data in friendsData array
  //   var friendScore = req.body.scores;
  //   var scoresArray = [];
  //   var friendCount = 0;
  //   var bestMatch = 0;

  //   //runs through all current friends in list
  //   for (var i = 0; i < friendsData.length; i++) {
  //     var scoreDiff = 0;
  //     console.log(friendsData[i].name);
      
  //     //run through scores to compare friends
  //     for (var j = 0; j < FriendScore.length; j++) {
  //       scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(friendScore[j])));
  //     }

  //     //push results into scoresArray
  //     scoresArray.push(scoreDiff);
  //   }

  //   //after all friends are compared, find best match
  //   for (var i = 0; i < scoresArray.length; i++){
  //     if (scoresArray[i] <= scoresArray[bestMatch]) {
  //       bestMatch = i;
  //     }
  //   }

  //   //return bestMatch data
  //   var theOne = friendData[bestMatch];
  //   res.json(theOne);

  //   //pushes new submission into friendData array
  //   friendData.push(req.body);
  // });
// }


