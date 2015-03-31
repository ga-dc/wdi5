# Battleship

```
    dBBBBb dBBBBBb  dBBBBBBP dBBBBBBP dBP    dBBBP.dBBBBP   dBP dBP dBP dBBBBBb
       dBP      BB                                BP                        dB'
   dBBBK'   dBP BB   dBP      dBP   dBP    dBBP   `BBBBb  dBBBBBP dBP   dBBBP'
  dB' db   dBP  BB  dBP      dBP   dBP    dBP        dBP dBP dBP dBP   dBP
 dBBBBP'  dBBBBBBB dBP      dBP   dBBBBP dBBBBP dBBBBP' dBP dBP dBP   dBP
```

In addition to being an expert programmer, you're now the Grand Admiral of the High Seas!

Design a single-player game, played in the command line, in which you attempt to "sink" a fleet of unseen battleships with torpedos.

## Gameplay

- A 10 x 10 grid represents the player's "ocean".
- At the beginning of the game, two 5 x 1 "ships" are placed randomly on the grid.
- The ships may be placed horizontally or vertically on the grid (not diagonally), and are unbroken -- one ship takes up 5 consecutive spaces, not 3 here and 2 there.
- The player cannot see the ships on the grid. The ships will not move over the course of the game.
- Each turn, the player may place a "torpedo" somewhere on the grid. If the space on the grid corresponds to a space occupied by a ship, the player scores a "hit".
- If the player hits all the spaces occupied by a ship, the player "sinks" the ship. The player wins when both ships have been sunk.

## Requirements

- The player should be able to quit the command line and resume their game later.
- The player should be able to clear the board and start a new game.
- The player should be able to see their score and number of turns taken.
- The player should be able to see where (s)he placed torpedoes, and whether each torpedo was a hit or miss.

## Bonus

- Set a maximum number of turns. If the player doesn't sink both ships within that number of turns, or have fewer remaining turns than there are remaining un-hit ship spaces, they lose.
- Expand the grid beyond 10 x 10, and include more ships... maybe of different lengths!
- Make the game's interface in the command line as visually-stunning as possible! Text-based art is encouraged.

## Mega-Bonus

- Make it a two-player game: each player has a grid onto which they place their ships. They then take turns with the computer: Player 1 shoots torpedos onto the grid hiding Player 2's ships, and vice-versa. The winner is who sinks their opponent's ships before their own sink!
