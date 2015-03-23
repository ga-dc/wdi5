#	Refactor this code into as few characters as possible WITHOUT sacrificing readability!
#	You still have to space things and indent them nicely, and so on.
#	DRY it off! (Don't Repeat Yourself!)

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
