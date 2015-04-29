'use strict';

$('button').click(function () {
    // What is `this`?
    // What is `$(this)`?
    debugger;

    // Using `$(this)` is a best practice.
    $(this).css('background-color', 'red');

    // If `$(this)` and `this` point to the same thing, why doesn't the follow code work?
    // this.css('background-color', 'red');
});
