'use strict';

var user = {
    tournament:'The Masters',
    data      :[
        {name:'T. Woods', age:37},
        {name:'P. Mickelson', age:43}
    ],

    showPersonTournament:function () {
        // Let capture the this pointer in the enclosing function.
        // And use it in the enclosed anon function.
        var theUserObj = this;

        this.data.forEach (function (person) {
            // What is the this pointer?
            // What is the person variable?
            // What is the the theUserObj variable?
            debugger;
            // The 'this' pointer is still the global object.
            // The person is a parameter that was passed into this anon
            // function.
            // The theUserObj variable is picked up from the enclosing
            // function because of javascript closure.
            console.log (person.name + ' is playing at ' + theUserObj.tournament);
            // T. Woods is playing at the Masters
            // P. Mickelson is playing at the Masters
        });
    }
};

// Invoke the user object literal's clickHandler function.
// Note: it's really not being used as a event handler here.
user.showPersonTournament();
