# RUBY
# Comments with #

# Variables
beep = "beep"

# Conditionals
number = 10
if number > 5
  puts "big"
elsif number < 5
  puts "little"
else
  puts "must be 5"
end

# Case Statements
day = "Tuesday"
case day
when "Monday"
  puts "Happy coffee"
when "Tuesday"
  puts "How was that coffee"
when "Friday"
  puts "I am in love"
else
  puts "This day does not count"
end

# While Loop
count = 10
while count > 0
  puts count
  count -= 1
end

###############

# Methods
def multiply(x, y)
  x * y
end

# Arrays
my_name_array = ["Adam", "Elaine", "Tom"]
my_name_array[0]
my_name_array << "Matt"


# Enumeration
var dwarves = ["Doc", "Grumpy", "Happy", "Sleepy", "Bashful", "Sneezy", "Dopey"];

dwarves.each do |dwarf|
  puts "Hi HO! I am #{dwarf}"
end

# Hashes
my_hash = {name: "Snow White", age: 20, weakness: "apples"}
my_hash[:name]
my_hash[:age] = 21
