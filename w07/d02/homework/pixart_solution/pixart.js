var form = document.getElementById('form');
var input = document.querySelector('#color-field');
var brush = document.querySelector('.brush');

form.addEventListener('submit', function(event){
  event.preventDefault();
  brush.style.backgroundColor = input.value;
});

for( var i = 0; i < 8000; i++){
  var div = document.createElement('div');
  div.classList.add('square');
  div.addEventListener('mouseover', function(){
    this.style.backgroundColor = brush.style.backgroundColor;
  });
  document.body.appendChild(div);
}
