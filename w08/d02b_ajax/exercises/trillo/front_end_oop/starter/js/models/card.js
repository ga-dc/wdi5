var Card = function(id, description, completed){
  this.id = id
  this.description = description
  this.completed = completed
}

Card.prototype = {
  createInRails:function(){
    $.ajax({
      type: "POST",
      dataType: "json",
      data: {card:{description: this.description, completed: this.completed}},
      url: "http://localhost:3000/cards"
    }).done(function(){
      trilloModel.fetchCards();
    }).fail(function(){
      console.log("saving to rails api failed")
    })
  },
  update: function(){
    
  }
}
