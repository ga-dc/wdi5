// Game View
var GameView = function( model ){
  this.model = model
  this.render()
}

GameView.prototype = {
  render: function(){
    var gameElement = document.querySelector(".game")
    gameElement.innerHTML = ""
    for( var i = 0; i < this.model.squares.length; i++ ){
      var square = this.model.squares[i]
      var el = document.createElement("div")
      el.innerHTML = square
      el.setAttribute('data-id', i)
      el.addEventListener("click", this.onClick.bind( this ) )
      gameElement.appendChild( el ) 
    }
  }, 
  onClick: function( event ){
    var id = event.target.getAttribute("data-id")
    // update the model
    this.model.squares[id] = this.model.turn
    // switch the turn
    this.model.switchTurn()
    // render the game
    this.render() 
  }
}

// render the board
// handle click events
