var express = require("express")
var app = express()

app.get("/", function( req, res ){
  res.send("99 Bottles of beer on the wall. <a href='/98'>Take One Down, Pass it Around</a>")
})

app.get("/:numberOfBottles", function( req, res ){
  var num = req.params.numberOfBottles
  var next = num - 1
  if( num != 0 ){
    res.send(num+" Bottles of beer on the wall. <a href='"+ next +"'>Take One Down, Pass it Around</a>")
  } else {
    res.send(num+" Bottles of beer on the wall. <a href='/99'>Start Over</a>")
  }
})

app.listen(3000, function(){
  console.log("app listening on port 3000")
})