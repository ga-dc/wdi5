// this is a reference to the calling context
// (i.e. what you called the method on)

function personSpeakFunc() {
  console.log("Hello, I'm " + this.name);
}

var me = { name: "Adam",
               age: 29,
               favoriteColor: "teal",
               speak: personSpeakFunc
          }

var jeff = { name: "Jeff",
             age: 29,
             favoriteColor: "Red",
             speak: personSpeakFunc
            }

me.speak();
jeff.speak();

personSpeakFunc();





// console.log(person["name"]);
// var propertyToGet = "age";
// console.log(person[propertyToGet]);
