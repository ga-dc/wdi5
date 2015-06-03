var foo = {
    value: 0,

    increment: function increment () {
        this.value += 1;
        return this;
    },

    decrement: function decrement () {
        this.value -= 1;
        return this;
    },

    add: function add (value) {
        this.value += value;
        return this;
    },

    log: function log () {
        console.log(this.value);
        return this;
    },

    oops: function oops () {
        console.log("break the chain");
        // return this;
    }
};

foo.increment().add(11).decrement().log().add(5).log();

// foo.increment();
// foo.add(11);
// foo.decrement();
// foo.log();
// foo.add(5);
// foo.log();

foo.increment().add(11).oops().decrement().log().add(5).log(); //=> undefined is not an object
