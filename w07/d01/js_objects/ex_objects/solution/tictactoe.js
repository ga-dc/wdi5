function TicTacToe() {
  this.currentPlayer = "X";
  this.board = [[null,null,null],
                [null,null,null],
                [null,null,null]];

  this.toggleCurrent = function() {
    if (this.currentPlayer == "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  };

  this.play = function(player, row, column) {
    player = player.toUpperCase();
    if (player != this.currentPlayer) {
      return false
    }
    if (this.board[row][column] != null) {
      return false;
    } else {
      this.board[row][column] = player;
      this.toggleCurrent();
      return true;
    }
  };

  this.checkWin = function() {
    rowWinner = this.checkRows();
    columnWinner = this.checkColumns();
    diagonalWinner = this.checkDiagonals();
    if (rowWinner) {
      return rowWinner;
    } else if (columnWinner) {
      return columnWinner;
    } else if (diagonalWinner) {
      return diagonalWinner;
    } else {
      return false;
    }
  };

  this.checkRows = function() {
    for (var row = 0; row < 3; row++) {
      if (this.board[row][0] === this.board[row][1] && this.board[row][0] === this.board[row][2] && this.board[row][0]) {
        return this.board[row][0];
      }
    }
    return false;
  };

  this.checkColumns = function() {
    for (var column = 0; column < 3; column++) {
      if (this.board[0][column] === this.board[1][column] && this.board[0][column] === this.board[2][column] && this.board[0][column]) {
        return this.board[0][column];
      }
    }
    return false;
  };

  this.checkDiagonals = function() {
    upperLeft = this.board[0][0];
    upperRight = this.board[0][2];
    center = this.board[1][1];
    lowerLeft = this.board[2][0];
    lowerRight = this.board[2][2];
    if (upperLeft === center && upperLeft === lowerRight) {
      return upperLeft;
    } else if (upperRight === center && upperRight === lowerLeft) {
      return upperRight;
    } else {
      return false;
    }
  };

};
