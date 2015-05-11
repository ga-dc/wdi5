var Trillo = function(){
  this.cards = []
  this.fetchCards()
}

Trillo.prototype = {
  fetchCards : function(){
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://localhost:3000/cards"
    }).done(function(response){
      trilloModel.loadCards(response);
      trilloView.render();
    }).fail(function(){
      console.log("ajax is a failure")
    })
  },
  loadCards : function(response){
    this.cards = [];
    for(var i = 0; i < response.length; i++){
      var card = new Card(response[i].id, response[i].description, response[i].completed)
      this.cards.push(card)
    }
  }
}
