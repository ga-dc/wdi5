$(document).ready(function(){
  console.log($("h1.greeting#hello"))

  // using the .append() jQuery function
  $("div.append").append("<p>were appending this using append</p>")

  // using the .appendTo() jQuery function
  $("<p>were appending this using appendTo</p>").appendTo($("div.append"))

  // using the .prepend() jQuery function
  $("div.prepend").prepend("<p>were prepending this using prepend</p>")

  // using the .prependTo() jQuery function
  $("<p>were prepending this using prependTo</p>").prependTo($("div.prepend"))

  // changing css with jQuery .css() function
  $(".css").css({
    "background-color": "blue",
    "color": "white",
    "text-align": "center"
  })

  // .each()
  var emptyDivChildren = $(".empty").children()

  emptyDivChildren.each(function(index, child){
    console.log(index + child)
    $(this).hide()
  })

  // adding an event listener using jQuery .on()
  $(".css").on("click", function(){
    // show hide add css replace append prepend
  })

})
