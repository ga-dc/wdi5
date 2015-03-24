puts "What temperature do you want to convert?"
temp = gets.chomp.to_f

puts "What unit are you converting from? (K, F, C)"
case gets.chomp.upcase
  when "F" 
    temp = (temp - 32) * (5.0 / 9.0)
  when "K"
    temp -= 273.15
end

puts "What unit are you converting to? (K, F, C)"
unit_out = gets.chomp.upcase
case unit_out
  when "F"
    temp = temp * (9.0 / 5.0) + 32
  when "K"
    temp += 273.15
end

puts "The temperature is #{temp} #{unit_out}."
