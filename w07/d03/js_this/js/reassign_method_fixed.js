'use strict';

// This data variable is a global variable
var data = [
    {name:'Samantha', age:12},
    {name:'Alexis', age:14}
];

// user is an object literal with a data property of names and ages
// and a showFunction function that displays one of the name/age.
var user = {

    // this data variable is a property on the user object
    data    :[
        {name:'T. Woods', age:37},
        {name:'P. Mickelson', age:43}
    ],
    showData:function (event) {
        // random number between 0 and 1
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1;

        // Hey, what is the 'this' variable pointing to?
        debugger;

        // It's the user object literal.
        // Why?
        // Because we changed the runtime context of the
        // this function EXPLICITLY using the javascript 'bind'
        // function/method.

        // This line is adding a random person from the data
        // array to the text field
        console.log (this.data[randomNum].name + ' ' + this.data[randomNum].age);
    }
};

// Assign the user.showData function to a global variable
var showUserData = user.showData.bind(user);
// NOTE: the showUserVariable is a GLOBAL variable pointing to a
// function.
// But we used the javacript 'bind' method to explicitly set the
// Context, and the this pointer, to be the user object literal.

// When we execute the showUserData function, the values printed to
// the console are from data array in the user object.
showUserData();
