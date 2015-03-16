# Installfest!

## Sublime Text

[Download](http://www.sublimetext.com/3)

## XCode CLI tools

    $ xcode-select --install
    
## Homebrew

    $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    $ brew update && brew upgrade
    $ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile

### You know it worked if...

The output of `which brew` is not `brew not found`

## RVM

uninstall rbenv if it exists. do you have it?

    $ which rbenv
    
If the output is anything other than blank, get an instructor to help you uninstall.

Otherwise, go ahead and install RVM:

    $ \curl -sSL https://get.rvm.io | bash
    
Then close and reopen the Terminal.

### You know it worked if...

The output of `$ which rvm` is not `rvm not found`

## Ruby v 2.1.2
    
    $ source ~/.rvm/scripts/rvm
    $ rvm install 2.1.2
    close and reopen the terminal
    
### You know it worked if...

The output of `which ruby` is **not** `/usr/bin/ruby`

## Git

    $ brew install git
    
### You know it worked if...

The output of `git --version` is greater than or equal to 2.0

## Configure Git

    $ git config --global user.name  "YOUR NAME"
    $ git config --global user.email "YOUREM@IL.COM"
    $ git config --global color.ui always
    $ git config --global color.branch.current   "green reverse"
    $ git config --global color.branch.local     green
    $ git config --global color.branch.remote    yellow
    $ git config --global color.status.added     green
    $ git config --global color.status.changed   yellow
    $ git config --global color.status.untracked red
    $ git config --global core.editor "subl -w"


## Sign Up for GitHub

Write your github username on the whiteboard.