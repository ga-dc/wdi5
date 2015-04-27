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

  this.play = function(player, i, j) {
    player = player.toUpperCase();
    if (player != this.currentPlayer) {
      return false
    }
    if (this.board[i][j] != null) {
      return false;
    } else {
      this.board[i][j] = player;
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
    for (var i = 0; i < 3; i++) {
      if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2] && this.board[i][0]) {
        return this.board[i][0];
      }
    }
    return false;
  };

  this.checkColumns = function() {
    for (var i = 0; i < 3; i++) {
      if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i] && this.board[0][i]) {
        return this.board[0][i];
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
