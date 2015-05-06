var Card = function(description){
  this.description = description
}

Card.prototype = {
  load: function(callback){
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: "http://localhost:3000/cards"
    }).done(function(response){
      callback
    }).fail(function(response){
      console.log("js failed to load")
    })
  },
  save: function(data){
    $.ajax({
      type: 'POST',
      data: data,
      dataType: 'jsonp',
      // have to add id to url
      url: "http://localhost:3000/cards"
    }).done(function(response){
      console.log("model saved")
    }).fail(function(){
      console.log("failed to save")
    })
  },
  update: function(data){
    $.ajax({
      type: 'PUT',
      data: data,
      dataType: 'jsonp',
      // have to add id to url
      url: "http://localhost:3000/cards"
    }).done(function(response){
      console.log("model saved")
    }).fail(function(){
      console.log("failed to save")
    })
  }
}
