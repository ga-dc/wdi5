var Board = function( title ){
  this.title = title || ""
  Board.all.push( this )
}

Board.all = []

Board.prototype = {

}
