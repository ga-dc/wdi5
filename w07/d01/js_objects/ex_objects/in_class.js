


////////////////////////
/// MONKEYS ////////////
////////////////////////


function makeMonkey(initialName, initialSpecies) {

  var newMonkey = {
    name: initialName,
    species: initialSpecies,
    foodsEaten: [],
    eatSomething: function(food) {
      this.foodsEaten.push(food);
      return food;
    },
    introduce: function() {
      return "Hi, I'm " + this.name + " and I'm a " + this.species + " who has eaten " + this.foodsEaten;
    }
  };

  return newMonkey;
}


var nabil = makeMonkey("Nabil", "chimpanzee");




///////////////////////////
// Making them manually ///
///////////////////////////

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

var jeff = {
  name: "Jeff",
  species: "Emperor Tamarin",
  foodsEaten: [],
  eatSomething: eatSomethingFunction,
  introduce: introduceFunction
};

var robin = {
  name: "Robin",
  species: "Baby Pygmy Marmoset",
  foodsEaten: [],
  eatSomething: eatSomethingFunction,
  introduce: introduceFunction
  }
};

adam.introduce();
jeff.introduce();
robin.introduce();

adam.eatSomething("coffee");
adam.eatSomething("bagel");
jeff.eatSomething("bananas");
robin.eatSomething("coffee");
robin.eatSomething("coffee");
robin.eatSomething("coffee");
robin.eatSomething("coffee");



adam.name;
adam.name = "Bob";
adam["name"];
adam["name"] = "Charlie"
