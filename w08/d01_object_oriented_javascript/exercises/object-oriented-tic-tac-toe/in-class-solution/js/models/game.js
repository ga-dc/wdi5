// Game Model

var Game = function(){
  // the value of each of the squares
  this.squares = [
    "","","",
    "","","x",
    "","o",""
  ]
  this.turn = "x"
  // whos turn is it
}

Game.prototype = {
  switchTurn: function(){
    this.turn = this.turn == "x" ? "o" : "x"
  }
}

// reset
// whos the winner?
