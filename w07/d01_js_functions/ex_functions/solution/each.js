function app() {
  var prefix = "The element is ";
  var printer = function(el) {
    console.log(prefix + el);
  }
  each(["This", "Is", "Amazing", "Dude"], printer);
}

function each(arr, fxn) {
  for(var i in arr) {
    fxn(arr[i]);
  }
}

app();
