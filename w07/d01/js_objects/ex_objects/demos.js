

function makeMonkey(name) {
  var monkey = {
    name: name,
    thingsEaten: [],
    eatSomething: function(thing) { this.thingsEaten.push(thing); }
  }
  return monkey;
}



var carol = new Monkey("Carol");
var jb = new Monkey("Justice Beaver");

carol.thingsEaten;
carol.eatSomething("Banana");
carol.thingsEaten;
carol.eatSomething("Beef Wellington");
carol.eatSomething("Cedar-roasted salmon with a fennel-anise sauce and saffron foam");


// Write a function makePerson(name, occupation, loverName)
// Which builds an object with those properties / values and returns the object.

function makePerson(name, occupation, loverName) {
  var somePerson = {
    name: name,
    occupation: occupation,
    loverName: loverName,
    numArms: 2
  };
  return somePerson;
}
