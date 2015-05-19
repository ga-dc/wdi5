var express = require("express")
var app = express()

app.get("/", function( req, res ){
  res.send("99 Bottles of Beer on the wall. <a href='/98'>Take one down</a>")
})

app.get("/:numBottles", function( req, res ){
  var next = req.params.numBottles - 1
  if( next == -1 ){
    res.send("<a href='/'>Start Over</a>")
  } else {
    res.send(req.params.numBottles+" Bottles of Beer on the wall. <a href='/"+next+"'>Take one down</a>")
  }
})

app.listen(3000, function(){
  console.log("listening on 3000")
})