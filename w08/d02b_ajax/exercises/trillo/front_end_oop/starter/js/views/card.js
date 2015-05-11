var CardView = function(card){
  this.card = card
  this.container = document.createElement("div")
  this.container.className = "card"
  this.description = document.createElement("p")
  this.description.innerHTML = card.description
  this.container.appendChild(this.description)
  var input = document.createElement("input")
  input.type = "checkbox"
  input.checked = card.completed
  input.className = "finish"
  input.addEventListener("click", function(){

  })
  // this.description.addEventListener("click", this.editCard.bind(this))
  this.container.appendChild(input)
  return this.container
}

CardView.prototype = {
  editCard: function(){
    
  }
}
