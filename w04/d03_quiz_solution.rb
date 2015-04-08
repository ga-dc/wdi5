# W04D01 Quiz
=begin
Your solutions to all the problems below (except for Problem 1) should be included in this file.

Assuming the database "w04d01" mentioned in Problem 3 has been created, this file should be able to be executed in the command line (`ruby d01_quiz.rb`) without throwing any errors.
=end

## Problem 1
=begin
As you would with a regular homework assignment, please pull this file to your homework repository, make the necessary edits, push it, and then make a pull request.

The instructors will not provide assistance. If you run into trouble, please copy and paste the file as a public Gist (https://gist.github.com/), and share the link with the instructors as an issue in the addbass-hw repository.
=end

## Problem 2
=begin
Define a method "numbers_plus_two" such that the return value of the method below is the array [2,4,6,8,10]. Use a numerator inside the method definition.
=end

def numbers_plus_two(numbers)
  numbers.map do |number|
    number * 2
  end
end

puts numbers_plus_two([1,2,3,4,5])

## Problem 3
=begin
Given the following code:
=end
require "active_record"

ActiveRecord::Base.establish_connection(
  adapter:  "postgresql",
  host:	    "localhost",
  database: "quiz"
)

ActiveRecord::Base.connection.tables.each do |table_name|
  if ActiveRecord::Base.connection.table_exists? table_name
    ActiveRecord::Migration.drop_table(table_name)
  end
end

ActiveRecord::Migration.create_table :ships do |column|
  column.string :name, null: false
end

ActiveRecord::Migration.create_table :sailors do |column|
  column.string :name, null: false
  column.belongs_to :ship
end

class Ship < ActiveRecord::Base
  has_many :sailors
end

class Sailor < ActiveRecord::Base
  belongs_to :ship
end

# 3.A) Create a ship object and save it to a variable.

titanic = Ship.create(name: "Titanic")

# 3.B) Create two sailors that belong to the ship object you created in 3.A.

rose = titanic.sailors.create(name: "Rose")
jack = titanic.sailors.create(name: "Jack")

# 3.C) Puts the names of all sailors that belong to the variable you created in 3.A.

titanic.sailors.each do |sailor|
  puts sailor.name
end

## Problem 4
=begin
Create a method that accepts 2 arguments and always returns false.
=end

def mymethod(x,y)
  return false
end
