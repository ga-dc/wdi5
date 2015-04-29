'use strict';

var user = {
    data:[
        {name:'T. Woods', age:37},
        {name:'P. Mickelson', age:43}
    ],
    clickHandler:function (event) {
        // random number between 0 and 1
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1,
        randomName,
        randomAge;

        // Hey, what is the 'this' variable pointing to?
        debugger;

        // Yaaa, the this pointer is pointing to the user
        // object literal we created above.

        // Why?
        // Because we changed the runtime Context that
        // this function is running in using the 'bind' function
        // below.

        // Does this have a data property?
        // Yes, because this points to the user object literal
        // which has a data property.
        randomName = this.data[randomNum].name;
        randomAge = this.data[randomNum].age;

        // This line is printing a random person's name and age from
        // the data array.
        console.log( randomName + ' ' + randomAge);

    }
};

// Here we are using the javascript 'bind' function to
// change the "Context" that clickHandler function will
// be invoked in WHEN IT IS INVOKED/EXECUTED/RAN.
// And the 'this' variable always points to the runtime
// Context of function!
$('button').click (user.clickHandler.bind(user));
