#	Your Work Environment

##	Developing an intimate relationship with your computer

---

##	Objectives

-	Describe the difference between a command, its flags, and its arguments

-	Create and modify folders and files using the shell

-	Describe the difference between an absolute and a relative path

-	Distinguish between "safe" and "dangerous" CLI commands

-	Describe what a file or folder's permissions are

-	Add a custom alias and function to .bash_profile

---

##	Framing

At each step, ask students what they see and what's happening.

###	We do:

1.	Have students open their computers, and open Terminal

	-	What do you think it does?

-	`brew install tree`

	-	Ignore this for now

-	Type `ls`

	-	What do you see?

-	Type `echo 'Hi there!' > hello.txt`, then `ls`

	-	What happened?

-	Type `open hello.txt -e`

	-	What happened?

---

###	What are the steps of what we just did?

Write the steps of what we just did on the board.

1.	Open your Home folder

2.	Create a new text file called "hello.txt"

3.	Open it and write "Hi there!"

---

###	Following the steps on the board, do the same stuff WITHOUT the Command Line.

---

###	Which way was easier?

---

###	This is called the "command line", also "shell", also "bash".

-	The command line / shell / bash is a way of interacting with your computer without using a fancy graphical interface

	-	Command line: issue lines of commands to your comp

	-	Shell: an application that runs the command line

	-	Bash: a specific shell type

	-	The **terminal** runs the shell. Used to be an physical computer. Now just an app.

-	Brief history

	-	Based on Unix

	-	Might look familiar to old folks using old computers: no mouse

---

###	Why would programmers so often work in the command line?

-	What is a **GUI**?

---

###	Anatomy of a command

-	Command

-	Flag

	-	The command's options

-	Argument

	-	The input that's being processed by the command

-	Example

	-	Give someone a haircut

		-	Haircut style is a flag

		-	Person getting haircut is argument

		-	`haircut --mohawk Robin`

	-	`-` vs `--`

-	Argument is usually a file

-	`say 'Hello'`

-	`say -v ?`

---

###	Namespaces and double-dashes

-	Namespaces

	-	`ruby`

	-	`ruby -v`

	-	`ruby --version`

###	Helpful stuff

-	Shortcuts

	-	Ctrl + D

	-	Ctrl + C

	-	Ctrl + K

-	`gem help`

	-	`gem -h`

	-	`gem --help`

-	Type `man ruby`

-	Introduce manuals

	-	Things in brackets are optional

	-	Structure of the manual

---

###	Every command is executed in the context of the current folder

-	`mkdir` as example

	-	Where does it make the directory?

-	`cd Desktop`

-	Go up with `..`

	-	`cd ..`

-	`cd` Drag and drop

-	`cd ~`

	-	Shortcut to home folder regardless of where you are

-	Tab completion

-	Other funky punctuation: `$`

###	Absolute vs relative

-	Your current frame of reference

-	Mailing addresses: Domestic vs international vs interplanetary vs universe

-	`open` a file using an absolute path, then a relative path

---

##	Commands exercise

###	13m) You do: Pair up, assign groups, and figure out what each command does.

Each column is related commands.

Play with the commands and figure out:

-	How would you describe what the command does?

-	For what (if anything) is the command's name an abbreviation?

-	Identify a useful flag for each command

|A|B|C|D|E|
|-|-|-|-|-|
|`touch`|`cat`	|`pwd`	|`history`	|`ls -a`	|
|`mkdir`|`head`	|`tree`	|`mv`		|`cp -R`	|
|`ls`	|`tail`	|`open`	|`cp`		|`mkdir -p`	|

-	Not worth time to memorize everything; know how to look it up

---

###	10m) We do: The dangerous commands

####	rm

	touch hello.txt
	rm hello.txt

-	What does `rm` stand for?

-	Why is this "dangerous"?


	mkdir DeathStar
	rm DeathStar

-	Why didn't it work?


	rm -d DeathStar

-	What does `-d` stand for?


	mkdir DeathStar
	touch DeathStar/vader.txt
	rm -d DeathStar

-	Why didn't it work?


	rm -r DeathStar

-	What does `-r` stand for?

	-	Recursion

-	Safety check against deleting stuff you don't mean to delete.

	1.	Recreate `vader.txt`

	-	Change permissions

	-	Try to `rm -r` again

-	Be **super** careful with `rm -rf`.

---

####	sudo

-	Think twice about it

---

##	Navigation exercise

###	bit.ly/1EO1SRl

-	Move into working directory

---

###	Customizing your bash profile

-	Functions

-	Navigate to home folder, open .bash_profile for editing

-	functionName(){

	}

-	Restart Terminal

---

#	Closing

-	Don't summarize for them in closing. Ask them to define for me. Closing should be an assessment (of sorts)
