var snuggles = document.getElementById("cat");
var moveSnuggles = 0;
var left = true;
walkingCat();

function walkingCat() {
  var startSnuggles = setInterval(function () {
    if (moveSnuggles < 960 && left) {
      snuggles.style.left = moveSnuggles + "px";
      moveSnuggles += 10;
      var rotation = 0;
    } else if (moveSnuggles > 0) {
      snuggles.style.left = moveSnuggles + "px";
      snuggles.style.webkitTransform = "rotate(" + moveSnuggles + "deg)"
      rotation += 10;
      moveSnuggles -= 10;
      left = false;
    } else {
      snuggles.style.left = moveSnuggles + "px";
      moveSnuggles += 10;
      left = true;
      snuggles.style.transform = "scaleX(1)";
    }
  }, 16);
}
