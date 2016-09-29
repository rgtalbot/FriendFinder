var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//EXPRESS CONFIGURATION
var app = express();
var PORT = 3000;

//BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.use(express.static(path.join(__dirname, 'app/public/')));

//ROUTING FILES
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);



//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});