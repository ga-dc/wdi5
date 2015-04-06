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
Define a method "numbers_plus_two" such that the return value of the method below is [3,4,5,6,7]. Use a numerator inside the method definition.
=end

def numbers_plus_two(numbers)

end

numbers = [1,2,3,4,5]
numbers_plus_two(numbers)

## Problem 3
=begin
Given the following code:
=end
require "active_record"

ActiveRecord::Base.establish_connection(
  adapter:  "postgresql",
  host:	    "localhost",
  database: "w04d01"
)

["teachers", "students"].each do |table_name|
  if ActiveRecord::Base.connection.table_exists? table_name
    ActiveRecord::Migration.drop_table(table_name)
  end
end

ActiveRecord::Migration.create_table :teachers do |column|
  column.string :name, null: false
end

ActiveRecord::Migration.create_table :students do |column|
  column.string :name, null: false
end

class Teacher < ActiveRecord::Base
  has_many :students
end

class Student < ActiveRecord::Base
  belongs_to :teacher
end

=begin
3.A) Create a teacher object and save it to a variable.

3.B) Create two students that belong to the teacher object you created in 3.A.

3.C) Puts the names of all students that belong to the variable you created in 3.A.
=end

## Problem 4
=begin
Create a method that accepts 3 arguments and always returns false.
=end

