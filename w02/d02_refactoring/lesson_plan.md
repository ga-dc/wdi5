# Refactoring

## Objectives
- Rewrite code for maximum readability, modularity, and efficiency
- Use comments for meaningful documentation and rapid prototyping
- Properly use +=, -= and other "syntactic sugar" 
- Use proper naming conventions for methods, classes, and variables
- Describe the concept of DRY and how it relates to "good" code
- Utilise and distinguish between different types of refactoring

## Intro

```
puts "What temperature do you want to convert?"
temp = gets.chomp.to_f

puts "What unit are you converting from? (K, F, C)" 
unit_in = gets.chomp
unit_in.upcase!

puts "What unit are you converting to? (K, F, C)" 
unitOut = gets.chomp
unitOut.upcase!

if unit_in == "F" 
  if(unitOut == "F")
    puts "The temperature is #{temp} F."   
    elsif(unitOut == "C")
      puts "The temperature is #{(temp - 32) * (5.to_f / 9.to_f)} C."
      elsif(unitOut == "K")
	puts "The temperature is #{(temp - 32) * (5.to_f / 9.to_f) + 273.15} K."
	end 
elsif unit_in == "C" 
if unitOut == "F" 
puts "The temperature is #{temp * (9.to_f / 5.to_f) + 32} F."
elsif unitOut == "C" 
puts "The temperature is " + temp.to_s + " C."
elsif unitOut == "K" 
puts "The temperature is " + (temp - 273.15).to_s + " K."
end 
elsif unit_in == "K" 
  if unitOut == "F" then puts "The temperature is #{(temp - 32) * (9.to_f / 5.to_f) + 273.15} F."
  elsif unitOut == "C" then puts "The temperature is #{temp + 273.15} C."
  elsif unitOut == "K" then puts "The temperature is #{temp} K."
  end 
end
```

- What could be more efficient about this code?
  - Not just efficient in how it runs, but efficient in how it looks and in how easy it is to change
  - If I want to change the sentence given to the user at the end, what do I have to do?
  - If I want to test to make sure all my conversions are correct, I need to test every `unit_in` against every `unit_out`. How many tests do I need to do?
- This is code I'd want to **REFACTOR**
  - Taking code that works and making it more efficient
  - Speed, readability, and changeability
- Best way to look for things that need to be changed?
  - Look for things that repeat
- **DRY**
  - Don't repeat yourself
  - **Why not?**
- This is **IMPORTANT**
  - You'll be asked to refactor your code and other people's code

---

####Activity

Take my code and refactor it into as few characters as possible, **WITHOUT** sacrificing readability
- Still have to put things on separate lines, indent, etc
- **NOTE TO SELF: Don't ask them to Slack code** until they're done!

```
puts "What temperature do you want to convert?"
temp = gets.chomp.to_f

puts "What unit are you converting from? (K, F, C)" 
unit_in = gets.chomp.upcase

puts "What unit are you converting to? (K, F, C)" 
unit_out = gets.chomp.upcase

case unit_in
  when "F"
    temp = (temp - 32) * (5.0 / 9.0)
  when "K"
    temp -= 273.15
end

case unit_out
  when "F"
    temp = temp * (9.0 / 5.0) + 32
  when "K"
    temp += 273.15
end

puts "The temperature is #{temp} #{unit_out}."
```
---

##  Things to check when refactoring

- What kinds of things did you fix?
- How could you tell what was wrong?

- Separation of Concerns & Modularity
  - Works nicely with OOP
  - ...and TDD!
- Consistency
- Naming
- Indentation
- Commenting
- DRY

---

##  Types of refactoring

- When you refactor, you're going to find yourself naturally doing a couple different "verbs"
  - Different types of refactoring
- Each programmer will have different "code smells"
  - Bad habits they have
  - Their code might work, but there are things that are still "off"


- Compiled a list of refactoring types and naming conventions
  - As a class, we need to fill in the blanks 

- https://www.refactoring.guru/smells/smells
- https://www.refactoring.guru/refactorings/refactorings
- https://github.com/bbatsov/ruby-style-guide

https://docs.google.com/spreadsheets/d/1LJ7Drfy85HnMKe_EhcO_1PdnCzvMoUTKWcQSEGW9hS0/edit?pli=1#gid=0

---
