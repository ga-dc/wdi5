
for(var i=0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


var numbers = [8, 7, 13, 26];
var i = 0;
while (i < numbers.length) {
  var i = 0;
  console.log("in a while loop!" + numbers[i]);
  i++;
}

var board = [["o", "x", "o"],
            ["x", "x", "."],
            [".", "o", "."]];

for(var row = 0; row < board.length; row++ ) {
  currentRow = board[row];
  for(var column=0; column < currentRow.length; column++) {
    console.log(currentRow[column]);
  }
}
