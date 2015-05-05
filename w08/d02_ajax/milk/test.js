$(document).ready(function(){
  var url = "https://api.wunderground.com/api/f28a93cae85945b6/geolookup/conditions/q/va/midlothian.json"
  $.ajax({
    url: url,
    dataType: "jsonp"
  }).fail(function(response){
    console.log("this has failed")
  }).done(function(response){
    console.log(response.current_observation.temp_f)
  }).always(function(response){
    console.log("this always happens")
  })

})
