var age = 18;
if (age > 21){
  console.log("Welcome");
} else if (age >= 18){
  console.log("Come in, but here's a wristband.");
} else {
  var yearsLeft = 21 - age;
  console.log("Sorry, come back in " + yearsLeft + " years.");
}
