// Differences:
// 1) SEMICOLONS EVERYWHERE
// 2) CURLY BRACES EVERYWHERE
// 3) PARENTHESIS EVERYWHERE
// 4) VARs EVERYWHERE
// 5) camelCase EVERYWHERE


var myFavoriteNum = 13;
var message = "Hello, I'm a string,here's a quote \"my name is adam\"...";
var otherMessage = 'Hi, I\'m a less formal string.';

var myName = "Adam";
var myGreeting = "Hi, I'm, " + myName + "!";

// THIS IS BAD, CREATES A GLOBAL VARIABLE
// harisFavoriteFood = "bananas";

console.log(myGreeting);


///////////////
// Variables //
///////////////

var a = 1;
console.log(a);

var person = "Batman";

var message = "I'm the " + person + "!";

//////////////
// Arrays   //
//////////////

var lyrics = ["ring, ring, ring, ring",
              "ring, ring, ring, ring"]
lyrics.push("bananaphone!");
lyrics.push("doo doo de doo do doo!");
var ditty = lyrics.pop();

///////////////////
// if statements //
///////////////////

var hoodieSwagLevel = 9;

if (hoodieSwagLevel < 10) {
  console.log("bro do you even hoist?");
  console.log("bro do you even lift?");
} else if (hoodieSwagLevel > 50) {
  console.log("wow. such hood. very swag. amaze. ");
  console.log("wow. such fleece. very warms. mmmmm. ");
} else {
  console.log("respectable");
}

////////////////
// Truthiness //
////////////////

t = true;     // true
fullString = "Hi";  // true
f = false;    // false
n = null;     // false
u = undefined; // false
z = 0;         // FALSE!!!!!!
empty = "";    // FALSE!!!!!!

if (t) {
  console.log("true is true");
} else {
  console.log("true is false");
}

if (f) {
  console.log("false is true");
} else {
  console.log("false is false");
}

if (n) {
  console.log("null is true");
} else {
  console.log("null is false");
}

if (u) {
  console.log("undefined is true");
} else {
  console.log("undefined is false");
}

if (z) {
  console.log("0 is true");
} else {
  console.log("0 is false");
}

if (empty) {
  console.log("empty string is true");
} else {
  console.log("empty string is false");
}

if (fullString) {
  console.log("string is true");
} else {
  console.log("string is false");
}


//////////////
// Loops    //
//////////////

javascriptSwoleness = 2;
while (javascriptSwoleness < 100) {
  console.log("doing some reps");
  javascriptSwoleness++;
  console.log("How much have I bulked? " + javascriptSwoleness);
}

for (var i = 0; i < lyrics.length; i++) {
  console.log(lyrics[i]);
}

for (index in lyrics) {
  console.log(lyrics[index])
}
