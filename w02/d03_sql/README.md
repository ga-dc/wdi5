# SQL

<!--Totally not heavily inspired by Sean's lesson plan from WDI DC2-->

## Objectives

- Create an SQL database, containing tables, that is saved locally
- Distinguish between keys, foreign keys, and indexes
- Describe the data types used in SQL and the related field constraints
- Execute CRUD actions on the database using "pure" SQL (psql)
- Ensure the database is DRY using normalization
- Protect the database from common security vulnerabilities
- Use different JOIN types to combine data

## What is a database?

- A collection of tables representing data as columns and rows
  - A lot like an Excel workbook
- Communicate via SQL
  - Many types of DBs, but generally all use similar SQL syntax
  - PGSQL, MySQL, SQLite...

## What's a relational database?

- A non-relational databse is like a hash
  - Big ol' sequence of keys and values
  - Don't follow the same schema
    - i.e. There aren't column headers defining what everything in the 3rd column is
- Goofy ways of naming things
  - Table = Relation
    - Confusing, because it SHOWS relations, isn't a relation itself
    - AKA entity
      - A representation of an object, like a class of students, or a lot of cars
  - Column = Field = Attribute
    - Attribute sound familiary?
  - Rows = Records = Tuples
  - Key
    - A unique value each record has that you can use to find the record
    - There aren't really "row numbers" in PSQL
      - Primary keys are the closest thing
      - Keys and primary keys are different

## Data types

- Have to tell the database what kind of data to allow in which cells
  - Boolean
  - Integer
  - Float
  - Text / VARCHAR
  - NULL
  - Date
  - Time
  - [And many more](http://www.postgresql.org/docs/9.3/interactive/datatype.html)

## Constraints
  - i.e. NOT NULL
    - [And many more](http://www.postgresql.org/docs/8.1/static/ddl-constraints.html)
  - Why are constraints and data types different?
    - You'd have to have INTEGERNOTNULL and INTEGER

## Syntax

  - All statements end in a semicolon
    - Will probably forget to use these, so call me out!
  - Whitespace doesn't matter
  - Uppercasing!
  - [Ye style guide](http://leshazlewood.com/software-engineering/sql-style-guide/)

## Getting PGSQL

  - Mac: http://postgresapp.com/
    - `export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin`
    - Then open the app and click "Open psql"
  - Linux: Should already have it
    - Try `psql`

## Code along

```
\l
# Lists all databases

CREATE DATABASE addbass;
\l
# What changed?
# What happens if we don't use a semicolon?

\c addbass
# What might C stand for?

\d
# Lists all tables

\?
# Shows available commands if you get stuck

CREATE TABLE students ( id SERIAL PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, age INT NOT NULL, ss_num INT NOT NULL UNIQUE );
\d
# Write on board
# # What are different components?
# What does SERIAL mean?
# # It's a data type

```

---
## Break!
---

## CRUD

- CRUD stands for the most basic interactions we want to have with any database
  - What might CRUD stand for?

```
SELECT * FROM addbass;
# What does it do?
# What does * stand for?

INSERT INTO addbass (first_name, last_name, age) VALUES ('Robin', 'Thomas', 87);
SELECT * FROM addbass;

UPDATE addbass SET first_name = 'Robert' WHERE first_name = 'Robin';

DELETE FROM addbass where first_name = 'Robin';
```

## Where's all this data stored, anyway?

- `~/Library/Application\ Support/Postgres/var-9.4`
- Neat things
  - postgres-server.log
  - global/
    - What the eff is THAT?
      - Binary!
      - Spread out across multiple files
- [More info](http://www.postgresql.org/docs/9.0/static/storage-file-layout.html)


## Exercise!

- Enter all students
