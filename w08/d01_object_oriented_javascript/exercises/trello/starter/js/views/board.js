var BoardView = function( selector, model ){
  this.model = model
  this.els = []
  this.els.boards = document.querySelector( selector )
  this.els.newBoard = document.querySelector('.js-board-new')
  this.els.createBoard = document.querySelector('.js-board-new')
  this.bindUI() 
}

BoardView.prototype = {
  bindUI: function(){
    this.els.newBoard.addEventListener("click", function( event ){
      event.preventDefault()
      this.newBoard()
    }.bind(this)) 
    $("body").on("keyup", ".js-board-create", this.createBoard.bind(this) )
  },
  newBoard: function( titleText ){
    var board = document.createElement("div") 
    board.className = "board"
    var title = document.createElement("h2")
    title.className = "board-title"
    if( titleText ){
      title.innerHTML = titleText 
    } else {
      var input = document.createElement("input")
      input.className = "js-board-create"
      title.appendChild( input )
    }
    board.appendChild( title )
    $(this.els.boards).prepend( board )
  },
  createBoard: function( event ){
    if( event.keyCode == 13 ){
      var title = event.target.value
      var board = new Board( title )
      this.model.all.push( board )
      this.render()
    }
  },
  render: function(){
    this.els.boards.innerHTML = ""
    for( var i = 0; i  < this.model.all.length; i++ ){
      this.newBoard( this.model.all[i].title )
    }
  }
}
