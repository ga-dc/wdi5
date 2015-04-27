function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

function app() {
  console.log(reduce([4, 3, 2, 1], sum));
  console.log(reduce([2, 4, 6, 8], product));
}

// for each element in collection, perform a function and use result to perform the next function
function reduce(arr, reduceFxn) {
  result = arr[0];
  for(var i = 1; i < arr.length; i++) {
    result = reduceFxn(result, arr[i]);
  }
  return result;
}

app();
