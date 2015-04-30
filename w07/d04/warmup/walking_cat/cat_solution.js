walkingCat();

function walkingCat() {
  var cat = document.querySelector('#cat');

  var distance = 0;
  setInterval(function() {
    cat.style.left = distance + 'px';

    if (distance == window.innerWidth) {
      distance = 0;
    } else {
      distance += 2;
    }
  }, 45);
}
