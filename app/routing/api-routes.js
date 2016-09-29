var friendData = require("../data/friends.js");

module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    });


    app.post('/api/friends', function (req,res) {
        var currentUser = req.body;
        var bestFriend = {};
        var lowestScore;

        for (var i in friendData) {
            var totalDifference = 0;

            for (var f in currentUser.scores) {
                totalDifference += Math.abs(parseInt(currentUser.scores[f] - parseInt(friendData[i].scores[f])));
            }

            if (totalDifference < lowestScore || lowestScore === undefined) {
                lowestScore = totalDifference;
                bestFriend = friendData[i];
            }

        }


        friendData.push(currentUser);

        res.status(200).json(bestFriend);



    });
};