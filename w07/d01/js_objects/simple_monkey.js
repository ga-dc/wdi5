var adam = {
  name: "Adam",
  species: "Squirrel Monkey",
  foodsEaten: [],
  eatSomething: function(food) {
    this.foodsEaten.push(food);
    return food;
  },
  introduce: function() {
    return "Hi, I'm " + this.name + " and I'm a " + this.species + " who has eaten " + this.foodsEaten;
  }
};


console.log(adam.introduce());
adam.eatSomething("banana");
adam.eatSomething("pizza");
console.log(adam.introduce());
