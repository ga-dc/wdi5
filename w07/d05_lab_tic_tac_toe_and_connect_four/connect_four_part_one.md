Homework 07-03/4

#### Learning Objectives
- Practice traversing the DOM using jQuery
- Practice selecting and creating DOM elements using jQuery
- Practice adding event listeners to DOM elements
- Gain comfortability working with jQuery

# Connect Four!!!!!

![connect four](http://www.quickmeme.com/img/ff/ffa7f008604ce5b0faf2da4257d0aeb4c9e55162a4785817454902b6a04b074f.jpg)

First, we're going to lay down the foundation for building Connect Four! To begin you should go step by step (_day by day_ (_day by daaaaaayyyy_) ).

# Part 1 - Create a board

In an HTML document:
  - Create a div and give it an ID of 'gameboard-container'
  - Create gamepieces in your container div
    - A Connect Four game is 7 pieces wide by 6 pieces high
    - Give each gamepiece a class of `piece`
    - You can add any other attribute to the gamepieces that will aid you in selecting and manipulating those elements

You should now have a board that displays 42 gamepieces. You can organize your board and gamepieces any way that you like (i.e. by column, by row, or just 42 separate divs). When organizing think of the benefits and cons of your method of organization.

After you have created your gameboard, read through the provided stylesheet to see what attributes have been defined for certain classes and IDs.

# Part 2 - Click Events

Create a new JavaScript file that will contain the logic of your gameboard. Define a function `startGame` that when called onload will start a new game of Connect Four.

### Make Em Red!

Add an event listener to your gamepieces so that when a gamepiece is clicked, it will turn that piece red. You should not move on to the next step until you can independently click each gamepiece and turn it red.

__COMMIT__

### Make Em Red or Black!

Edit your code so that now when a gamepiece is clicked it will alternate between red and black.
  - The first time a gamepiece is clicked, it should turn red
  - The next time a gamepiece is clicked, it should turn black

Before moving to the next step make sure that clicks are alternating between red and black and that all gamepieces can be black OR red.

__COMMIT__

### Make It Stick!

Now when gamepieces are clicked they will alternate between red and black. Edit your code so that when a gamepiece is clicked:
  - If it is set to red and clicked again it will not change color
  - If it is set to black and clicked again it will not change color
  - An invalid click (on a colored piece) should not affect the order of the color of the next valid click. (i.e. if I am supposed to play red, and i click on a red, then next valid click should turn that gamepiece red, not black)

__COMMIT__

### Only Down Below

Edit your code so that only the bottommost piece in a given column can be clicked and have its color change.


_There are many ways to go about doing this. Before jumping into the code aspect of this problem, plan it out. Think about the attributes of the gamepieces, the attributes of the gameboard and the methods available to you for jQuery objects that might be useful to achieve this goal._

## BONUS

### Click Free-For-All

Edit your code so that you can click anywhere in a column and ONLY the bottom most piece will change color.

### RELOAD!

Create a button that when clicked will empty the gameboard of all clicked pieces and return the board to the 'Start Game' state. The first piece that is clicked after a reset should turn red.
