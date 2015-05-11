var TrilloView = function(trilloModel){
  this.newCardButton = document.querySelector("#new-card-button")
  this.newCardText = document.querySelector("#new-card-text")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.model = trilloModel
  this.newCardButton.addEventListener("click", this.addCard.bind(this))
  this.render()
}

TrilloView.prototype = {
  addCard: function(event){
    event.preventDefault()
    var description = this.newCardText.value
    var card = new Card(null, description, false)
    card.createInRails()
    this.render();
  },
  render: function(){
    this.toDoList.innerHTML = ""
    this.doneList.innerHTML = ""
    for(var i = 0; i < this.model.cards.length; i++){
      var cardView = new CardView(this.model.cards[i])
      if(this.model.cards[i].completed){
        this.doneList.appendChild(cardView)
      }
      else{
        this.toDoList.appendChild(cardView)
      }
    }
  }
}
