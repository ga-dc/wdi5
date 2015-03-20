loop do

  # Main Menu
  puts("-----------------------------------------")
  puts("Welcome to AMAco PDA (c) 1988")
  puts("Type 1 to Convert temperatures")
  puts("Type 2 for the Task Manager")
  puts("Type 3 for PieDrop (TM) - Drone Delivery of Pizza")
  puts("Type 4 to quit")
  puts("-----------------------------------------")

  puts("Enter a number: ")
  menu_choice = gets().chomp()

  # Temperature Converter
  if menu_choice == "1"

    #Temperature Menu
    puts("---------------------------------------")
    puts("Type 1 to convert Fahrenheit to Celsius")
    puts("Type 2 to convert Celsius to Fahrenheit")
    puts("Enter a number:")
    conversion_input = gets().chomp()

    # Fahrenheit to Celsius
    if conversion_input == "1"
      puts("---------------------------------------")
      puts("F --> C | Enter temperature in Fahrenheit:")
      temperature_input = gets().chomp().to_i

      converted_temp = 5 * (temperature_input - 32) / 9
      puts("#{temperature_input}F = *** #{converted_temp}C ***")

    # Celsius to Fahrenheit
    elsif conversion_input == "2"
      puts("---------------------------------------")
      puts("C --> F | Enter temperature in Celsius:")
      temperature_input = gets().chomp().to_i

      converted_temp = 9 * (temperature_input) / 5 + 32
      puts("#{temperature_input}C = *** #{converted_temp}F ***")

    # Invalid temperature menu option
    else
      puts("Invalid choice made.")
    end

  # Task Manager
  elsif menu_choice == "2"
    puts("Task Management isn't implemented yet.")

  # PieDrop
  elsif menu_choice == "3"
    puts("PieDrop (TM) - Drone Delivery of Pizza is currently in private beta...")

  # Quit
  elsif menu_choice == "4"
    puts("Goodbye!")
    exit

  # Invalid main menu option
  else
    puts("Please choose a valid menu option")
  end
end
