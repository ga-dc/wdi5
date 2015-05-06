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
    var completed = input.checked ? true : false
    // fix update to make this work
    card.update({completed: completed})
    trilloView.render()
  })
  this.description.addEventListener("click", this.editCard.bind(this))
  this.container.appendChild(input)
  return this.container
}

CardView.prototype = {
  editCard: function(event){
    var input = document.createElement("input")
    input.value = this.description.innerHTML
    this.container.removeChild(this.description)
    this.container.appendChild(input)
    input.addEventListener("keyup", function(event){
      if (event.keyCode == 13){
        var value = input.value
        // pending update function to work
        this.card.update({description:value})
        trilloView.render()
      }
    }.bind(this) )
  }
}
