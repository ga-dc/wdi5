var Animal = function( name ){
  var _name = name
  this.getName = function(){
    return _name	   
  }
  this.setName = function( name ){
    return _name = name
  }
}
