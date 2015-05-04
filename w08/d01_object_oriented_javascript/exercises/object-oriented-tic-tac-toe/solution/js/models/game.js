var Game = function(){
  this.squares = [
    "", "", "",  
    "", "", "",  
    "", "", ""
  ]  
  this.winnables = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
  ]
  this.turn = ""
  Array.prototype.containsArray = function ( array /*, index, last*/ ) { //http://jsfiddle.net/ThinkingStiff/X9jed/
    if( arguments[1] ) {
        var index = arguments[1], last = arguments[2]
    } else {
        var index = 0, last = 0; this.sort(); array.sort()
    }
    
    return index == array.length
        || ( last = this.indexOf( array[index], last ) ) > -1
        && this.containsArray(array, ++index, ++last )
  }
}

Game.prototype = {
  winner: function(){
    var xs = [] 
    var os = []
    for( var i = 0; i < this.squares.length; i++ ){
	var square = this.squares[i]
	if (square == "x"){
	  xs.push( parseInt(i) );
	} else if ( square == "o" ){
	  os.push( parseInt(i) );
	}
      }
      for( var i = 0; i < this.winnables.length; i++ ){
        winnable = this.winnables[i];
        if( xs.containsArray(winnable) ){
          return "x"
	}
        if( os.containsArray(winnable) ){
          return "o"
	}
      }
  },
  reset: function(){
    for( var i = 0; i < this.squares.length; i++ ){
	this.squares[i] = ""
    }
    this.turn = ""
  }
}