nums = [1,2,3,4,5];
aryEach(nums, printItem);
console.log("*******");
aryEach(nums, printItemPlusOne);


// // Write a function to accept three numbers and return
// // their product.
//
// function multiplyNums(num1, num2, num3) {
//   var product = num1 * num2 * num3;
//   return product;
// }
//
// // console.log(multiplyNums(4,5,6));
//
// var width = 5;
// var height = 10;
// var depth = 2;
//
// var area = multiplyNums(width, height, depth);
// console.log("the area is " + area);
//
// var secondArea = multiplyNums(100, 2, 51);
// console.log("the area is " + secondArea);
//
//
// // Write a function to accept an age and returns
// //   * true if you can rent a car without additional fees
// //   * false if you cannot rent a car without additional fees
//
// function rentWithoutFees(age) {
//   if (age > 25) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// var noFee = rentWithoutFees(29);
//
//
// // Write a function to accept an array and print the
// // elements in order
//
// function printArray(ary) {
//   for(var i = 0; i < ary.length; i++) {
//     console.log(ary[i]);
//   }
// }
//
// var animals = ["cat", "dog", "capybara"];
//
// printArray(animals);






function printItem(item) {
  console.log(item);
}

function printItemPlusOne(item) {
  console.log(item + 1);
}

function aryEach(ary, functionToRun) {
  // iterate over each item in the array
  // for each item, call the 'functionToRun', passing
  // the current item
  for(var i = 0; i < ary.length; i++) {
    functionToRun(ary[i]);
  }
}

//
