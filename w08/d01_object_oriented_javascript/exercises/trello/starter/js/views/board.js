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
    this.els.newBoard.addEventListener("click", this.newBoard.bind(this) ) 
    $("body").on("keyup", ".js-board-create", this.createBoard.bind(this) )
  },
  newBoard: function( event ){
    event.preventDefault()
    var board = document.createElement("div") 
    board.className = "board"
    var input = document.createElement("input")
    input.className = "js-board-create"
    var title = document.createElement("h2")
    title.className = "board-title"
    title.appendChild( input )
    board.appendChild( title )
    this.els.boards.appendChild( board )
  },
  createBoard: function( event ){
    console.log( event )
    if( event.keyCode == 13 ){
      var title = event.target.value
      var board = new Board( title )
      console.log( board )
      this.model.all.push( board )
      this.render()
    }
  },
  render: function( kind ){
    this.els.boards.innerHTML = ""
    for( var i = 0; i < this.model.all.length; i++ ){
      var board = document.createElement("div") 
      board.className = "board"
      var title = document.createElement("h2")
      title.className = "board-title"
      if( this.model.all[i].title ){
	var titleText = this.model.all[i].title
	title.innerHTML = titleText
      } else {
	var input = document.createElement("input")
	input.className = "js-board-create"
	title.appendChild( input )
	input.focus()
      }
      board.appendChild( title )
      this.els.boards.appendChild( board )
    }
  }
}
