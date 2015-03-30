# One on Ones

![](https://dl.dropboxusercontent.com/s/b8mh8rgy4cnyk45/one-on-ones-1.png?dl=0)

## Week 2

### Object Oriented Programming

- Compare and contrast OOP to other programming paradigms
- Describe abstraction and how it applies to objects
- Explain the difference between a class and an instance
- Explain the difference between class and instance methods
- Explain the advantages of using objects to group qualities and actions
- Write a class with an initialize method
- Instantiate and use an object
- Write getter and setter methods
- attr_accessor, reader, writer
- Describe the difference between local variables, instance variables, class variables and global variables
- Explain variable scope and how it works
- Use "self" to reference an object instance
- Explain the usage of inheritance
- Write a class that inherits from another class
- Use "super" to inherit data from a parent class
- Explain what object-oriented Programming is
- Explain what encapsulation is
- Explain the difference between public, private, and protected methods
- Create multi-file Ruby programs using 'require_relative'

### TDD

- Explain what TDD means, and possible advantages / disadvantages
- Explain the concept of TDD and how it relates to "Red, Green, Refactor"
- Read Rspec tests and write code to make them pass
- Set up a Ruby program with RSpec
- Set up and write RSpec tests using
  - describe
  - before
  - let
  - expect
  - to and not_to
  - eq, be
- Write assert methods that fail
- Write code to make existing tests pass

### Refactoring

- Explain what DRY is, and why it is important
- Describe what refactoring is and when and why you should do it
- Explain why coding conventions are important and why we should follow them
- Describe the naming conventions for variables, methods, classes
- Explain what code commenting is, why it's valuable and when to use it
- Explain what 'syntactic sugar' means and how it can be useful
- Refactor a program with DRY principles
- Properly space and indent a program with multiple nested statements
- Use the +=, -=, ||=, &method and other 'syntactic sugar' operators
- Name methods, classes and variables correctly
- Add comments to a program to ease readability and describe meaning

### Problem/Domain Modeling/ERDs

- Show ability to break down a complex problem:
  - Model about real-world scenarios as data.
  - Identify major roles within a scenario.
  - Consider how roles interact and communicate.
  - Create a domain model by listing its parts (entities, relationships, attributes and behavior)
- Draw an ERD using proper notation
  - Identify and diagram a one-to-one, one-to-many, many-to-many relationship between data entities
  - Distinguish between entities & attributes (and when you should use one over the other)

###     DB / SQL

-       Create an SQL database, containing tables, that is saved locally and is ACID
-       Distinguish between keys, foreign keys, and indexes
-       Describe the datatypes used in SQL and the related field constraints
-       Execute CRUD actions on the database using "pure" SQL (Postgres, PSQL)
-       Ensure the database is DRY using normalization
-       Protect the database from common security vulnerabilities
-       Use different join types to combine data

###  ActiveRecord

- Explain what an ORM is and why we use it (vs. writing SQL)
- Explain what ActiveRecord is and what problem it solves
- Use seeds to populate a database
- Explain the basic idea of metaprogramming and how AR leverages this to provide an interface to the DB
- Predict the SQL commands that will be issued during particular AR method calls