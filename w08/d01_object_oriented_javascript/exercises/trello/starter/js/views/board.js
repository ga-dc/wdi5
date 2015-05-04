var BoardView = function( selector, model ){
  this.model = model
  this.els = []
  this.els.boards = document.querySelector( selector )
  this.els.newBoard = document.querySelector('.js-board-new')
  this.bindUI() 
}

BoardView.prototype = {
  bindUI: function(){
    this.els.newBoard.addEventListener("click", this.newBoard.bind(this) ) 
  },
  newBoard: function( event ){
    event.preventDefault()
    this.model.all.push( prompt("Enter board title:") ) 
    this.render()
  },
  render: function(){
    this.els.boards.innerHTML = ""
    for( var i = 0; i < this.model.all.length; i++ ){
      var board = document.createElement("div") 
      board.className = "board"
      board.innerHTML = "<h2 class='board-title'>"+this.model.all[i] + "</h2>"
      this.els.boards.appendChild( board )
    }
  }
}
