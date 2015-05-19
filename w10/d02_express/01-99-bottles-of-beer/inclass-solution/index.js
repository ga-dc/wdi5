var express = require("express")
var app = express()
var routes = require("./routes")

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))
app.get("/:numBottles?", routes.index )

app.listen(3000, function(){
  console.log("listening on 3000")
})