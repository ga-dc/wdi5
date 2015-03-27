# Terminal Clinic

## Standardize our file structures

- delete everything (eek)
- make this structure:

```
~/ga
    /addbass
    /addbass-hw
    /in-class
```

## Customize your Terminal

- download iTerm2 / why iTerm?
  - http://iterm2.com/features.html
  - Customizability
- Find a theme you like
  - https://github.com/mbadolato/iTerm2-Color-Schemes
- Customize the prompt
  - PS1 - https://www.kirsle.net/wizards/ps1.html
  - add color to prompt

## Git

- config
  - color? # does git status have colored output?
  - --global
  - --user && email
  - auto rebase
    - Merge Messages
    - http://viget.com/extend/only-you-can-prevent-git-merge-commits
- Delinquent Pull Requests
  - think before you commit
    - `git status`
    - `git add students/jshawl` instead of `git add .`
      - actually, let’s just alias it 
      - `git config --global alias.addbass 'add :/students/jshawl'`
- Merge Conflicts