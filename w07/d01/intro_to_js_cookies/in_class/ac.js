// Define the following variables
// threshold : number, 70
// temperature : number
// acWorking : boolean
// Use if statements to implement the following behavior
// If the temperature is greater than the threshold and the AC is working, print "Turn on the AC!"
// If the temperature is greater than the threshold and the AC is not working, print "Fix the AC! It's hot!"
// If the temperature is less than the threshold and the AC is working, print "Ah, maxin' relaxin'."
// If the temperature is less than the threshold and the AC is not working, print "When you get the chance, fix the AC."


var threshold = 70;
var temperature = 72;
var acWorking = true;

if (temperature > threshold) {
  if (acWorking) {
  console.log("Turn on the AC!");
  }  else {
  console.log("Fix the AC! It's hot!");
  }
} else if (temperature <= threshold && acWorking) {
  console.log("Ah, maxin' relaxin'.");
} else if (temperature <= threshold && !acWorking) {
  console.log("When you get the chance, fix the AC.");
}
