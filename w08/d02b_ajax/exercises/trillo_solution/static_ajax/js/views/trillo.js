var TrilloView = function(trilloModel){
  var newCard = document.querySelector("#new-card-button")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.newCardText = document.querySelector("#new-card-text")
  this.model = trilloModel

  newCard.addEventListener("click", this.newCard.bind(this))
  this.render()
}

TrilloView.prototype = {
  newCard: function(event){
    event.preventDefault()
    var description = this.newCardText.value
    var card = new Card(description)
    card.save({description: description})
    this.render()
  },
  render: function(){
    this.toDoList.innerHTML = ""
    this.doneList.innerHTML = ""
    for(var i = 0; i < this.model.cards.length; i++){
      var cardView = new CardView(this.model.cards[i])
      if(this.model.card[i].complete){
        this.doneList.appendChild(cardView)
      }
      else{
        this.toDoList.appendChild(cardView)
      }
    }
  }
}
