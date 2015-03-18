# GitHub

## Video Recordings

- [github](https://vimeo.com/122563352)
- [submitting hw](https://vimeo.com/122563351)

## Learning Objectives

- Differentiate between Git and Github
- List three best practices re: using git
- Explain what a fork is and why we would use one
- Explain difference between fetch and pull
- Explain the difference between a clone and a fork
- Diagram and explain the homework submission process
- Add SSH keys to github account
- Add and remove a remote repository
- Push commits to a remote repository
- Fork and Clone existing repository from Github
- Use Github to submit a pull request

## Git and Github 
- What is Github? What's the difference?
	- Github is a platform on top of Git that adds more features and puts your code in the cloud, which provides lots of benefits.
- Why do people use Github?
	- Collaboration
	- Backups
	- Social
	- Resume

## Adding SSH keys
- https://help.github.com/articles/generating-ssh-keys/
- Create an SSH key locally
- Go to https://github.com/settings/ssh
- Go to "Add SSH Key"
- In your terminal, do `cat ~/.ssh/id_rsa.pub`
- Copy the value that's output, and paste it directly into the textarea on Github. Then save.

## Cloning 
- What is a clone?
	- A clone is a copy of an existing repository. We can create as many clones as we want, wherever we want. They don't even have to be on our local computers.

**EXERCISE**: Clone the `addbass` repo to your local machine

## Fetch, Pull 


## Remotes 


## Forks && Pull Requests 
- Discuss how fork and pull helps alleviate this problem

## Git Guidelines 
In general, git will let you do almost whatever you want. It's not very opinionated software.

As such, it's our responsibility to use good practices to make sure our workflow is smooth so we don't cause ourselves more work, or lose work we've already done.

**EXERCISE**: Think, Pair, Share on what problems you might run into using Git with a group, and what guidelines might help resolve those problems.

- **DON'T** work on or push to master
	- When you're working solo on small projects, it can be ok to push to master sometimes for quick fixes and small features. However, when working on larger projects or with a team, you almost never want to push to master.
	- When doing work on a feature (or in our case, homework) you should always create a branch to work on. Then when you're done working, you can submit a pull request to the upstream repo.
- **DO** pull to master
	- The master branch represents the [canonical](http://english.stackexchange.com/questions/34920/what-does-canonical-mean/34926#34926) version of your code at any given point. As such, when you're updating your repository, you should pull to the master branch, and then merge those changes into your other branches as necessary.
- **ONLY** branch off of master
	- In more advanced git workflows, it can sometimes be beneficial to branch off of another branch. However, for simple git workflows like ours, branching off of master makes more sense and will keep our repo much cleaner.

## Homework Process 
- We will be using a variant of the [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
- When homework is assigned during the day, you'll go to your local version of the homework repo to pull it down. Go to the `master` branch and do a `git pull` (there shouldn't be any local changes on this branch, so you should be fine pulling to it).
- There are 2 top level directories in the homework repo: `assignments` and `students`. `assignments` will hold all of the assignment info and starter code necessary for each night's assignment. `students` is a directory that contains directories for each student in the course, and it's where you'll place your homework that you want to submit.
- The assignment for each day will be found in the `assignments` directory. In the assignments directory, find the corresponding weekly directory (w01, w02, etc.), and daily directory (d01, d02, etc.). The daily directory will be for the day the homework was assigned, not when it is due. So if the day is Tuesday, you'll look in d02.
- Once inside the correct weekly and daily directory, you'll find all the files necessary for the homework assignment. Copy all of these files into the corresponding weekly and daily folder inside of your personal student directory.
- If you're working on a brand new homework project (i.e. it's the first day of the week) you'll want to create a new branch at this point by using `git checkout -b w01`. If it's during the week, just checkout the branch that already exists for that week's homework by doing `git checkout w01`.
- Once you're on the homework branch, you'll probably want to do an initial commit with the new homework files, so you can come back to it if you need to.
- Now, you can continue to work and make commits as needed to complete your homework for the night.
- When you're done with your homework and ready to submit, commit all your changes. Then, do a `git push origin w01`, where `w01` is the name of the homework branch you're working on. This will push your local changes on that branch to your forked Github repo on a branch with the same name.
- Finally, go to github.com and find your forked repo. There should be an option on the main page to 'Create a Pull Request' from the commit you just made. Once you've selected that, make sure the name of the pull request is EXACTLY the lowercase letter 'w' and then the number of the week we're in, for example 'w03' or 'w12'. Also, add to the body of the pull request your level of "completeness" and "comfort" with this assignment as a number between 0 and 5 (0 between least, 5 being most). Once you've done that, submit your pull request and you're done.