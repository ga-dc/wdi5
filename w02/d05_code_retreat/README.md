# Conway's Game of Life

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

Visualization of the Game of Life:

![Alt Conway's Game of Life](http://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

The universe of the Game of Life is an **infinite two-dimensional orthogonal grid** of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbors, which are the cells that are directly horizontally, vertically, or diagonally adjacent.

###At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed. **Births and deaths happen simultaneously**, and the discrete moment at which this happens is sometimes called a `tick` (in other words, each generation is a pure function of the one before). The rules continue to be applied repeatedly to create further generations.
