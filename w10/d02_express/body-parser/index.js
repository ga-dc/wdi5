var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use( bodyParser.json() ) // handles json POST resquests
app.use( bodyParser.urlencoded({ extended: true }) ) // handles form submissions

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get("/", function( req, res ){
  res.render("index")
})

app.post("/", function( req, res ){
  res.render("index",{
    name: req.body.name
  })
})

app.listen(3000, function(){
  console.log("app listening on port 3000")
})











	