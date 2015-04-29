/*
  We use this similar to the way we use pronouns in natural
  languages like English and French. We write: “John is running
  fast because he is trying to catch the train.” Note the use of the
  pronoun “he.” We could have written this: “John is running fast
  because John is trying to catch the train.” We don’t reuse “John”
  in this manner, for if we do, our family, friends, and
  colleagues would abandon us. Yes, they would. In a similar
  aesthetic manner, we use the this keyword as a shortcut, a
  referent to refer to an object.
*/

// Create an object literal for person.
var person = {
    firstName   :'Penelope',
    lastName    :'Barrymore',
    fullName:function () {

        // Hey, what is the 'this' variable pointing to?
        debugger;

        // Yep, it's pointing to the person object literal.

        // Why?
        // Because the runtime Context of this function is
        // the person object literal.

        // Why?
        // Because we invoked this function/method at RUNTIME
        // like this 'person.fullName' below.

        // See how we use 'this' here just like we used 'he' in the example sentence?
        console.log(this.firstName + ' ' + this.lastName);

        // Well, we could have also written:
        console.log(person.firstName + ' ' + person.lastName);
        return this.firstName + ' ' + this.lastName;
    }
};

// The Context is the object literal 'person'
// The 'this' pointer in the fullName method is the object literal
// we defined above, 'person'.
console.log('This person\'s full name is ' + person.fullName());

// THE CONTEXT AND THEREFORE THE 'this' POINTER ARE ALWAYS SET AT RUN TIME,
// WHEN THE FUNCTION IS ACTUALLY EXECUTED OR INVOKED!!!
