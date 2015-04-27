function printer(arr) {
  if (arr === undefined) {
    arr = [];
  }
  // arr.sort();
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log('[1, 2, 3, 4, 5]');
printer([1, 2, 3, 4, 5]);
console.log('--------');

console.log('[6, 2, 3, 5, 8, 7]');
printer([6, 2, 3, 5, 8, 7]);
console.log('--------');

console.log('[35, 74, 12, 5, 3, 24, 9]');
printer([35, 74, 12, 5, 3, 24, 9]);
console.log('--------');

console.log('nothing');
printer();
console.log('--------');
