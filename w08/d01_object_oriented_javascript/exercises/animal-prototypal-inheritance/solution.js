var Animal = function( name ){
  var _name = name
  this.getName = function(){
    return _name	   
  }
  this.setName = function( name ){
    return _name = name
  }
}

var Cow = function(name){
  this.setName( name )
}

Cow.prototype = new Animal()
Cow.prototype.moo = function(){
  return "moo"
}

var bessie = new Cow("Bessie")
console.log( bessie.moo(), "my name is " + bessie.getName() )