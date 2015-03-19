# We are going to open up an AddBass Sundae Shoppe
# We have a whole bunch of flavors & toppings and we need to make sure our customers know about them.

flavors = ["Vanilla", "Chocolate", "Mint Chocolate Chip", "Cookies and Cream", "Cookie Dough", "Guatemalan Ripple", "Butter Pecan", "Peanut Butter Swirl", "Strawberry", "Raspberry Truffle", "Coffee", "Moose Tracks", "English Toffee Crunch", "Dark Chocolate Chip", "Double Chocolate", "Pistachio", "Banana", "Cherry Vanilla", "Butterscotch Vanilla", "Chocolate Chip", "French Vanilla", "Rum Raisin", "Peach", "Egg Nog", "Pralines and Cream", "Mocha Chip", "Cinnamon", "Vanilla Fudge", "Mango", "Butter Almond", "Irish Coffee", "Macadamia Nut", "Pumpkin", "Raspberry Sorbet", "Mango-Apricot Sorbet", "Lemon Sorbet", "Orange Sorbet", "Pomegranate Blueberry Chunk"]

toppings = ["Chocolate syrup", "Sprinkles", "Cherries", "Whipped cream", "Nuts", "Hot fudge", "Butterscotch syrup", "Caramel syrup", "M&M's", "Reese's Pieces", "Crushed Oreo cookies", "Crushed chocolate chip cookies", "Chocolate chips", "Butterscotch chips", "Brownie bits", "Gummy bears", "Whoppers", "Mini marshmallows", "Chocolate Bars", "Strawberries", "Raspberries", "Blueberries", "Bananas", "Strawberry syrup", "Pound cake", "Angel food cake", "Crushed candy canes", "Sugar wafers", "Peanut butter", "Shredded coconut", "Jelly beans"]


# ************************
# INSTRUCTIONS
# ************************

# .each
  # Our goal is to display every combination of ice cream flavors and toppings and how delicious they are.
  # We will use our new found enumeration powers to make this task easier.
    # Iterate over our arrays printing out for every combination the following line:
      # "I think that FLAVOR with TOPPING on it would be yummy!"

# .select
  # OH NO!!! Our sign maker has told us that our flavor names must be capped at 15 total character (spaces count)
  # Use the .select method to go through each of our arrays and create 2 new arrays for each of our initial arrays.
    # One of the new arrays should contain the flavors/toppings that are < 15 characters
    # The other should have the flavors/toppings that are greater than 15 characters.
  # Once we have this information we can tackle this problem.

# .map
  # We have decided to shorten our long names so they'll fit on the sign and our customers will have to figure it out.
  # We need to use .map to iterate over out long entries and have just the first 15 characters into a new array for later use.
    # HINT: we need to only save the characters from the 0th character position to the 14th character position in the array.
    # REMEMBER that we access letters in a string the same way we access item in an array using bracket notation. ex. "Randy"[0] == "R", "Randy"[0..3] == "Rand", "Randy"[0...3] == "Ran"

# .inject aka .reduce
  # Great we have shortened out long flavor and saved them.
  # Now the customers are flooding in and we need to see how much money we have made.
  # Let's assume that we only have one serving size of ice cream and topping that costs $4 even.

# We also have an array of the number of servings each customer has purchased that looks like this:
customer_purchases = [1, 3, 2, 5, 19, 4, 21, 1, 1, 1, 4, 2, 9, 15]

# Our goal is to use a method from above to figure our how much money each of these sales brought in and save that to a new array.
# And finally we want to use .inject, or .reduce (they're the same thing) to sum up our total sales for the day and save that to a variable we can display at the end of our program.
