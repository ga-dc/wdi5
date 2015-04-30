walkingCat();

function walkingCat() {
  var cat = document.querySelector('#cat');

  var distance = 0;
  setInterval(function() {
    cat.style.webkitTransform = 'rotate('+-distance*2+'deg)';
    cat.style.left = distance + 'px';
    cat.style.top = (-(distance - window.innerHeight + 100)  + 'px');

    if (distance == window.innerWidth) {
      distance = 0;
    } else {
      distance += 2;
    }
  }, 45);
}
