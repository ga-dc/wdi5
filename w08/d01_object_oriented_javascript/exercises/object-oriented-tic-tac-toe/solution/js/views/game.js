var GameView = function( selector, model ){
  this.el = document.querySelector( selector )
  this.model = model
  this.render()
}

GameView.prototype = {
  render: function(){
    this.el.innerHTML = ""	  
    for( var i = 0; i < this.model.squares.length; i++ ){
      var square = document.createElement("div")
      square.className = "square"
      square.setAttribute("data-id", i)
      square.innerHTML = this.model.squares[i]
      square.addEventListener("click", this.onClick.bind( this ) )
      this.el.appendChild( square )
    }
  },
  onClick: function( event ){
    var id = event.target.getAttribute('data-id')
    if( !this.model.squares[id] ){
      this.model.turn = this.model.turn == "x" ? "o" : "x"
      this.model.squares[id] = this.model.turn
      this.render()
      var winner = this.model.winner()
      if( winner ){
        alert( winner + "s win!" )
        this.model.reset()
        this.render()
      }
    }
  }
}