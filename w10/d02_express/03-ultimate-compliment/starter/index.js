var express = require("express")
var app = express()
var compliments = require("./models/compliment")
var colors = require("./models/color")

app.set("view engine","hbs")
app.use(express.static(__dirname + "/public"))

app.get("/", function( req, res ){
 //display a generic greeting and a randomly chosen compliment. Th    e background color of the app should be randomized as well
})

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})