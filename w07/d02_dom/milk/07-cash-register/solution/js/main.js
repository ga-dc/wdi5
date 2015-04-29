var userInput = document.getElementById("newEntry")
var total = document.getElementById("total")
var entries = document.getElementById("entries")
var form = document.querySelector("form")

// when the user submits the form
form.addEventListener("submit", function( event ){
  event.preventDefault()
  // get the userInput 
  console.log( userInput.value )
  // add a new entry to the entries list
    // generate the html for one entry
      // create a new element 
      var tr = document.createElement("tr")
      var td = document.createElement("td")
      var td2 = document.createElement("td")
      td2.innerHTML = parseFloat(userInput.value).toFixed(2)
      tr.appendChild( td )
      tr.appendChild( td2 )
    // append that html to the list of entries
      entries.appendChild( tr )
  // update the total
    // get the previous total 
      var previousTotal = total.innerHTML.substr(1)
    // add user input to the previous total
      var newTotal = parseFloat(previousTotal) + parseFloat(userInput.value)
    // update the total in HTML
      total.innerHTML = "$" + newTotal.toFixed(2)
  // clear the input
    userInput.value = ""
})




















