var Superhero = Base.extend({
    // called `init` or `initialize` in other libraries like Extend.js and Backbone.js
    constructor: function constructor (name, power) {
        this.name = name;
        this.superPower = power || "Can talk to fish. :(";
    },

    power: function power () {
        return this.superPower;
    }
});

var Mutant = Superhero.extend({
    power: function power () {
        return "Genetically superior to normal humans.";
    }
});

var aquaman = new Superhero("Aquaman");
console.log(aquaman.name, aquaman.power());

var batman = new Superhero("Batman", "super wealth");
console.log(batman.name, batman.power());

var xmen = new Mutant();
console.log(xmen.power());

var cyclops = new Mutant("Cyclops", "lazors");
console.log(cyclops.name, cyclops.power());
