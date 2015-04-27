var car = {
  model: "Honda",
  color: "Red",
  speed: 0,
  drive: function() {
    console.log("Vroooooooom!");
  },
  gas: function() {
    this.drive();
    this.speed += 10;
  }
};

car.drive();

console.log("***** adding gas****");
car.gas();

console.log(car.speed);


console.log("***** adding gas****");
car.gas();

console.log(car.speed);
