var List = function(){
  for (var i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
List.prototype = new Array()
List.prototype.each = function( callback ){
  for( var i = 0; i < this.length; i++ ){
    callback( this[i] )
  }
}
var items = new List("first", "second", "third")
items.each( function( item ){
  if( item == "first" )
    console.log( item, "is the worst")
  if( item == "second" )
    console.log( item, "is the best")
  if( item == "third" )
    console.log( item, "is the one with the hairy chest")
})