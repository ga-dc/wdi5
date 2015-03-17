# Version Control

## Objectives

- Explain what Git is and why we use it
- Initialize a local git repository
- Add and commit changes to a git repository
- Create and switch between branches
- Explain what a branch is and why we would use one
- Be able to merge branches 
- Explain what happens when you merge two branches

## You do

- read [About Version Control](http://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

## Version Control

- know who did what when
- make experimental changes
- time machine
- fast

## Git

- we used to do ![](files.png)
- distributed
- fast // sha fingerprints
- small // stores line by line changes

Three places you should know about:

1. The working directory || tree
  - the warehouse
2. The index || staging area
  - the shipping pallet
3. The commit || repo
  - the truck

![](http://git-scm.com/figures/18333fig0106-tn.png)

    git init
    git status
    git add <file>
    git commit

## You do

- Make at least three commits
- Change the last commit message with `git commit --amend`

## Viewing the history
```
git log
```

## We do

- git lg # the alias
  -  `curl http://git.camp/gl >> ~/.bash_profile && source ~/.bash_profile` 
- git branch in prompt
  - `curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh -o ~/.git-prompt.sh`
  -  http://code-worrier.com/blog/git-branch-in-bash-prompt/

## Branching
```
git branch # is just a pointer
touch {1..100}.txt
```

### you do

Make 5 experimental commits on a feature branch, using `git checkout -b`

## Merging

    git checkout master
    git merge feature-1

## You do

- our first pairing exercise!
- find a partner
- one person drives, one navigates
- create a new local repo
- make some commits
- create a feature branch
- make 3 commits
- merge in those changes
- switch

## Merge Conflicts

suck.
