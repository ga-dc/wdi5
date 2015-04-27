# Exercise: TicTacToe

Write a TicTacToe constructor ('class') in JavaScript. Your constructor should
make objects with the following:

Properties
* currentPlayer - string, either "X" or "O" (starts as "X")
* board         - 3x3 array, starts as all null e.g. [ [null, null, null],
                                                       [null, null, null],
                                                       [null, null, null]]

Publicly-Used Methods
**These are the ones used to run the game**
* play(player, x, y) - makes a play for player ("X" or "O") at the point specified on the grid.
                       Updates board & current player. Returns true if play was valid, false if not.
* checkWin() - returns "X", "O", or false depending on whether or not someone has won.

Privately used methods
**These are the ones used by other methods to help do the method's job**
* toggleCurrent() - changes the value of currentPlayer to be the other player. Only used by other method(s) in your 'class'.
* checkRows(), checkColumns(), checkDiagonals(); - only used internally by checkWin


```js
myGame = new TicTacToe();
myGame.currentPlayer;
myGame.checkWin();

myGame.play("X", 1, 1);
myGame.play("O", 0, 0);
myGame.checkWin();
myGame.board();

myGame.play("X", 1, 0);
myGame.play("O", 0, 1);
myGame.play("O", 2, 2); // returns false because not 'O's turn
myGame.board();
myGame.checkWin();

myGame.play("X", 1, 2);
myGame.board();
myGame.checkWin();
```
