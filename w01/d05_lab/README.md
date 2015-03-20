# AddBass PDA Lab

## 1. Titleizr

AddBass loved what you did with the temperature converter and they want you to add to the personal assistant commandline app!

- Add to your existing program (Starter code in the pda.rb file) that contains the temperature converter

- the new function of the app should receive user input

- Through the use of enumerables, titleize the input!
  - If the string `"dogs are so cute and cuddly"` is inputed:
  - You should puts something like this: `"The titleized version of the string you entered is: Dogs Are So Cute And Cuddly"`

- The program should still have the same temperature converter function, and should loop back to the main menu after it has titleized the string.

<b>*BONUS*</b>
- have small words like "a", "are", "the", "is", "and" not be capitalized in the puts.


## 2. Todo List

Let's use our newfound knowledge of arrays to add a to-do list to AddBass PDA.

* When the user selects the 'Task Manager' option in the main menu, they should be directed to a sub-menu with the following info
  * A list of all tasks
  * 'Add task' option
  * 'Finish task' option
  * Prompt for user input
* Selecting 'Add task' should prompt the user to enter text for a new task, add it to the existing list of tasks, and redirect to the main menu
* Selecting 'Finish task' should prompt the user to enter the task number, remove the corresponding task, and redirect to the main menu
* Bonus: After performing task manager operations, the user should be redirected to the task manager menu instead of the main menu

## 3. Personal Information Manager

Let's add our personal information to AddBass PDA.

* Step 1 - Add our personal info
  * Instantiate a hash with your personal info in it at the beginning of our program
  * Add an option in our menu to view our personal info.
  * When the user selects this option, the program should print our personal info and redirect to the main menu

Here's an example of what we should see.

```
Name: Randy
Age: 42
Occupation: Co-Founder, AddBass Enterprises Global
Favorite Food: Fig Newtons
```

* Step 2 - Add an option in the main menu for the user to edit their personal info
  * When the user selects this option, the personal info should be displayed
  * The user should then be prompted to enter which piece of info they wish to edit
  * The user should then be prompted to enter the new value for the piece of info they selected
  * The new personal info should then be displayed and the user should then be redirected to the main menu
