var express = require("express")
var app = express()
var hbs = require("hbs")
var bodyParser = require("body-parser")
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
hbs.registerPartials(__dirname+"/views/partials")

app.get("/", function( req, res ){
  res.render("index")
})

app.post("/", function( req, res ){
  res.render("index", {name: req.body.name})
})

app.listen(3000, function(){
  console.log("app listening on port 3000")
})