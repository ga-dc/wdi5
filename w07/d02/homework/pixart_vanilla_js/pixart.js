var form = $('#form');
var input = $('#color-field');
var brush = $('.brush');

form.submit(function(event) {
  event.preventDefault(event);
  brush.css("backgroundColor", input.val());
});

// $('#brush').click(function(){
//   $('#form').submit(function());
// });

for( var i = 0; i < 3000; i++){
  var div = $('<div class="square"></div>');
  div.hover(function(){
  $(this).css("backgroundColor",brush.css("backgroundColor"));
  });
  $("body").append(div)
}
