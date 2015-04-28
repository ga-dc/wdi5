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

        // Oops, the this pointer is the button DOM element.
        // Why?
        // Because this callback function was invoked as
        // an event handler for the button element's click event!

        // And the button element does NOT have a property named data
        // so, we barf here.

        // Oh, barfing by way of throwing this exception.
        // Uncaught TypeError: Cannot read property '1' of undefined

        // What is undefined?
        // the data property of this is undefined.

        // what is property '1' of undefined?
        // data[1] is property '1' of undefined.
        randomName = this.data[randomNum].name;
        randomAge = this.data[randomNum].age;

        // This line is printing a random person's name and age from
        // the data array
        console.log( randomName + ' ' + randomAge);

    }
};

// The button is wrapped inside a jQuery $ wrapper, so it is
// now a jQuery object.
// And the output will be undefined because
// there is no data property on the button object

// Cannot read property '0' of undefined
$('button').click (user.clickHandler);
