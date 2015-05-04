var boards = Board.all
var boardsView = new BoardsView(".boards", boards)
new Board("WDI Work")
new Board("Bucket List")

boardsView.render()
