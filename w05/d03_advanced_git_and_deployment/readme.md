# Advanced Git 

## Screencasts

- [Git Part 1](https://vimeo.com/125084932)
- [Git Part 2](https://vimeo.com/125084933)
- [Deployment](https://vimeo.com/125084934)

## .gitignore

- .DS_store

## Merge Conflicts

- `git checkout --ours/theirs`  
- the manual way 
- `git merge --abort`

## You do

- create a merge conflict
	- make one commit
    - create a new branch
    	- `git checkout -b feature-1
        - make one commit`
    - switch back to master: `git checkout master`
      - make one commit
    - try merging the feature branch, and fix the merge conflict:
    	- using --ours/theirs
        - manually

## Undo stuff w/ git checkout
 
- git checkout -b branch-name sha
- detached HEAD state
- revert file(s) to a previous state

## The diff

- git diff
- git diff --stat
- git diff --stat upstream/master

## Clean up pull requests

- undo modifications to existing files    
- remove new files
- retrieve deleted files

# Deployment

## Converting SQLite to Postgres

## Heroku & Deployment

- Deployment
- vs FTP
- vs git
- Migrations && Logs

## Gotchas

- use .gitignore to ignore sensitive information
