var board = new Board()
var boardView = new BoardView(".boards", board)
board.all.push({
  title: "WDI work"
},{
  title: "Bucket List"
})
boardView.render()
