require_relative 'db'
require_relative 'fridge'
require_relative 'food'
require_relative 'drink'
require_relative 'methods'


puts "Welcome to Fridge Manager\n"

while true
  puts "Please select an option"
  puts "** FRIDGES **"
  puts "1. List all fridges"
  puts "2. Add a fridge"
  puts "3. Delete a fridge"
  puts "** FOODS **"
  puts "4. View all foods in a fridge"
  puts "5. Add a food to a fridge"
  puts "6. Eat a food from a fridge"
  puts "** DRINKS **"
  puts "7. View all drinks in a fridge"
  puts "8. Add a drink to a fridge"
  puts "9. Consume part of a drink from a fridge"
  puts "10. Drink an entire drink"
  puts "11. Exit fridge manager\n"
  user_choice = gets.chomp.to_i
  while user_choice == 0
    puts "Please select a valid option."
    user_choice = gets.chomp.to_i
  end

  case user_choice

  when 1
    list_all_fridges
  when 2
    add_fridge
  when 3
    remove_fridge(get_fridge)
  when 4
    list_foods(get_fridge)
  when 5
    add_food(get_fridge)
  when 6
    eat_food(get_fridge)
  when 7
    list_drinks(get_fridge)
  when 8
    add_drink(get_fridge)
  when 9
    consume_partial_drink(get_fridge)
  when 10
    consume_total_drink(get_fridge)
  when 11
    puts "See ya later!"
    break
  else
    puts "Invalid option."
  end
end

# binding.pry
