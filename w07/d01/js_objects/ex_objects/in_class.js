////////////////////////
/// MONKEYS ////////////
////////////////////////
var eatSomethingFunction = function(food) {
  this.foodsEaten.push(food);
  return food;
};

var introduceFunction = function() {
  return "Hi, I'm " + this.name + " and I'm a " + this.species + " who has eaten " + this.foodsEaten;
};

var adam = {
  name: "Adam",
  species: "Squirrel Monkey",
  foodsEaten: [],
  eatSomething: eatSomethingFunction,
  introduce: introduceFunction
};

var hari = {
  name: "Hari",
  species: "Emperor Tamarin",
  foodsEaten: [],
  eatSomething: eatSomethingFunction,
  introduce: introduceFunction
};

var mck = {
  name: "McKenneth",
  species: "Baby Pygmy Marmoset",
  foodsEaten: [],
  eatSomething: eatSomethingFunction,
  introduce: introduceFunction
  }
};

adam.introduce();
hari.introduce();
mck.introduce();

adam.eatSomething("coffee");
adam.eatSomething("bagel");
hari.eatSomething("bananas");
mck.eatSomething("coffee");
mck.eatSomething("coffee");
mck.eatSomething("coffee");
mck.eatSomething("coffee");

adam.name;
adam.name = "Bob";
adam["name"];
adam["name"] = "Charlie"

var dumbo = {
  name: "Dumbo",
  species: "elephant",
  foodsEaten: ["grass"],
  sayHi: introduceFunction
}

Object.keys(dumbo)
Object.getOwnPropertyNames(dumbo)

for (property in dumbo) {
  console.log(property + ": " + dumbo[property]);
}


function makeObj() {

}

function makeMonkey() {
  
}
