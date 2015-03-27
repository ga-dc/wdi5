# Active Record

- [whiteboard](https://docs.google.com/a/generalassemb.ly/drawings/d/1Xf3JK3IXtj7bD4uQ8B1uZPHs8Po4g1CZILDQHvBt50k/edit)

## Screencasts

- [intro to active record](https://vimeo.com/123422765)
- [more active record](https://vimeo.com/123422764)

## Objectives

- Explain what an ORM is and why we use it (vs. writing SQL)
- Explain what ActiveRecord is and what problem it solves
- Use seeds to populate a database
- Explain the basic idea of metaprogramming and how AR leverages this to provide an interface to the DB
- Predict the SQL commands that will be issued during particular AR method calls

## Where are we and what is AR?

### Think / Pair / Share

- Read http://edgeguides.rubyonrails.org/active_record_basics.html [Sec. 1-3]
- Share out: someone to explain each section.
- What does ActiveRecord do? 
  - What problem does it solve?
  - How does it solve it?

Interface between our code and our datastore is very porous. Writing SQL out in our code can be a liability:
* Our code becomes tightly coupled to the implementation of our database
* Verbose - obscures our intentions with oodles of text

## Installation

* gem install activerecord
* Walk through setup and including it.

    psql
    create database musicals_db
    \c musicals_db
    paste in SQL

- Follow the docs [Section 5,6] and try to persist a Musical to the database
- How do we know it worked?
- Are there multiple ways to do this?
- Seed file

### You do

- Read sections 5-6 http://edgeguides.rubyonrails.org/active_record_basics.html
- Try some CRUD actions yourself!
- review
  - CRUD

## Break

## Seeds

## Methods for days

- new
- save
- create
- all
- find
- find_by
- where
- update
- delete vs destroy

### You do

- musicals readme
- review

## Lab (if there's time)

Take an existing app (lunch orders) and make its data persist!

