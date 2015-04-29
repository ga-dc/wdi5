var redButton = document.querySelector(".one")
var whiteButton = document.querySelector(".two")
var blueButton = document.querySelector(".three")
var yellowButton = document.querySelector(".four")

redButton.addEventListener("click", changeRed )
whiteButton.addEventListener("click", changeWhite )
blueButton.addEventListener("click", changeBlue )
yellowButton.addEventListener("click", changeYellow )

function changeRed(){
  document.body.style.backgroundColor = "red"
  document.body.style.color = "white"
}
function changeWhite(){
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
}
function changeBlue(){
  document.body.style.backgroundColor = "blue"
  document.body.style.color = "white"
}
function changeYellow(){
  document.body.style.backgroundColor = "yellow"
  document.body.style.color = "black"
}


