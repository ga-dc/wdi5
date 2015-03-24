# Refactoring

## Objectives
- Rewrite code for maximum readability, modularity, and efficiency
- Use comments for meaningful documentation and rapid prototyping
- Properly use +=, -= and other "syntactic sugar" 
- Use proper naming conventions for methods, classes, and variables
- Describe the concept of DRY and how it relates to "good" code
- Utilise and distinguish between different types of refactoring

## Intro

[refactor_me.rb](refactor_me.rb)

- What could be more efficient about this code?
  - Not just efficient in how it runs, but efficient in how it looks and in how easy it is to change
  - If I want to change the sentence given to the user at the end, what do I have to do?
  - If I want to test to make sure all my conversions are correct, I need to test every `unit_in` against every `unit_out`. How many tests do I need to do?
- This is code I'd want to **REFACTOR**
  - Taking code that works and making it more efficient
  - Speed, readability, and changeability
- Best way to look for things that need to be changed?
  - Look for things that repeat
- **DRY**
  - Don't repeat yourself
  - **Why not?**
- This is **IMPORTANT**
  - You'll be asked to refactor your code and other people's code

---

####Activity

Take my code and refactor it into as few characters as possible, **WITHOUT** sacrificing readability
- Still have to put things on separate lines, indent, etc
- **NOTE TO SELF: Don't ask them to Slack code** until they're done!

[refactored.rb](refactored.rb)

---

##  Things to check when refactoring

- What kinds of things did you fix?
- How could you tell what was wrong?

- Separation of Concerns & Modularity
  - Works nicely with OOP
  - ...and TDD!
- Consistency
- Naming
- Indentation
- Commenting
- DRY

---

##  Types of refactoring

- When you refactor, you're going to find yourself naturally doing a couple different "verbs"
  - Different types of refactoring
- Each programmer will have different "code smells"
  - Bad habits they have
  - Their code might work, but there are things that are still "off"
  - [Bad Code](badcode.jpg)

- [Good Code](goodcode.png)
- [What is spaghetti code?](spaghetti.jpg)

- Compiled a list of refactoring types and naming conventions
  - As a class, we need to fill in the blanks 
  - Write in your own definitions. I'll randomly call on people. 


- https://www.refactoring.guru/smells/smells
- https://www.refactoring.guru/refactorings/refactorings
- https://github.com/bbatsov/ruby-style-guide

- https://docs.google.com/a/generalassemb.ly/spreadsheets/d/1LJ7Drfy85HnMKe_EhcO_1PdnCzvMoUTKWcQSEGW9hS0/edit?usp=sharing

---

##  Let's actually refactor!

- Pick some code you made LAST week and refactor it
  - Searching for Obi-Wan
  - Dirty Words
  - Deck o' Cards
  - Sundae Shoppe
- When you can't possible refactor it any more, you'll be switching with someone else
- When done, write tests for it
---

