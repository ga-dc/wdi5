var kim = {
  name: "Kim Kardashian",
  occupation: "businesswoman",
  lover_name: "Kanye",
  love: function() { console.log("I love" + this.lover_name); }
};


function makeMonkey(name) {
  var monkey = {
    name: name,
    thingsEaten: [],
    eatSomething: function(thing) { this.thingsEaten.push(thing); }
  }
  return monkey;
}


function Monkey(name) {
  this.name = name;
  this.speak = function () {
    console.log("Hello!");
  };
}

// var myMonkey = {};
// Monkey.call(myMonkey, "Justice Beaver");
// myMonkey;

var carol = new Monkey("Carol");
var jb = new Monkey("Justice Beaver");

carol.thingsEaten;
carol.eatSomething("Banana");
carol.thingsEaten;
carol.eatSomething("Beef Wellington");
carol.eatSomething("Cedar-roasted salmon with a fennel-anise sauce and saffron foam");

jb.eatSomething("Columbian Snow");
jb.thingsEaten;



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

// With NEW keyword

function Person(name, occupation, loverName) {
  this.name = name;
  this.occupation = occupation;
  this.loverName = loverName;
  this.numArms = 2;
  this.love = function () {
    console.log("I love " + loverName);
  };
}

var david = new Person("David", "Stud", "Kim Dynasty");
var adam = new Person("Adam", "WDI Instructor", "Ruby");



function newRectangle(length, width){
  var rect = {
    length: length,
    width: width,
    isSquare: function(){
      if (this.length ==this. width){
        return true;
      } else {
        return false;
      }
    },
    area: function(){
      return this.length * this.width;
    },
    perimeter: function(){
      return (2 * this.length) + (2* this.width);
    }
  }
  return rect;
}

var s = newRectangle(4, 4);
console.log(s.isSquare());
console.log(s.area());
console.log(s.perimeter());




function Rectangle(length, width){
  this.length = length,
  this.width = width,
  this.isSquare = function(){
    if (this.length ==this. width){
      return true;
    } else {
      return false;
    }
  },
  this.area = function(){
    return this.length * this.width;
  },
  this.perimeter = function(){
    return (2 * this.length) + (2* this.width);
  }
}

var s = new Rectangle(4, 4);
console.log(s.isSquare());
console.log(s.area());
console.log(s.perimeter());
