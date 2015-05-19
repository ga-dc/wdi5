var express = require("express")
var app = express()
var hbs = require("hbs")
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get("/", function( req, res ){
  res.render("index")
})

app.listen(3000, function(){
  console.log("app listening on port 3000")
})