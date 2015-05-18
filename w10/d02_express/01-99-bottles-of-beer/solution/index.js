var express = require("express")
var app = express()
var hbs = require("hbs")
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname+"/views/partials")

app.get("/:numberOfBottles?", function( req, res ){
  var bottles = req.params.numberOfBottles || 99
  var next = bottles - 1
  res.render("index", {bottles: bottles, next: next})
})

app.listen(3000, function(){
  console.log("app listening on port 3000")
})