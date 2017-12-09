var express = require("express");
var exphbs  = require("express-handlebars");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

// var db = require("./models");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Configure express web server, so that it "knows about"
// express handlebars. Express handlebar will tell express 
// how to convert handlebars files to HTML!
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home',  {showTitle: false} );
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});