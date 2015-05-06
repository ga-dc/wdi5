$(document).ready(function(){
  var weatherUndergroundUrl = "http://api.wunderground.com/api/b0900ea853660a3f/conditions/q/CA/San_Francisco.json"
  $.ajax({
    url: weatherUndergroundUrl,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    console.log(response.current_observation.temp_f)
  }).fail(function(){
    console.log("ajax request not successful")
  }).always(function(){
    console.log("this always happens!")
  })
})
