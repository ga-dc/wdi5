# War!
## W07D01 Homework

### Install Node.js

...if you haven't already. This will let you run Javascript in the Command Line, just like you would Ruby.

https://nodejs.org/download/

To open the Javascript REPL, just type `node`. To run a Javascript file, type `node filename.js`.

### Make your deck!

This may look familiar...

Write all your code in the existing `cards.js` file. Javascript doesn't natively have an array-shuffling method, unlike Ruby, so one has been included for you.

First, modify the `build_deck` function so that it returns a complete deck of cards.

Then, modify the `high_card` function so that it deals two players a card from the top of a shuffled deck. The computer should be playing against itself since, also unlike Ruby, Node doesn't have an built-in way of getting user input.

Print out to the console the two cards, and which player had the higher card (or if it was a tie).

### Bonus: Make the Game of War

Have the computer play both sides in a game of War until there is a "winner". It should show each turn in the console, and at the end say which side won and after how many turns.

You might remember this game from elementary school:

The cards are divided into two decks of 26 cards. Each deck is given to a player.

On each turn, each player draws the top card from their deck. The player with the higher card adds both their card and the other player's card to the bottom of their deck.

If the cards drawn have the same value, each player draws an additional three cards. The player whose final card is of the greater value adds all eight cards to the bottom of their deck. (If both final cards have the same value, another three are drawn, and so on, until one player's final card is greater than the other player's.)

The game continues until one player runs out of cards.

Note that this game is 100% chance, and the outcome is determined entirely based on how the deck is shuffled.
