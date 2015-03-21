loop do

  # Main Menu
  puts("-----------------------------------------")
  puts("Welcome to AMAco PDA (c) 1988")
  puts("Type 1 to Convert temperatures")
  puts("Type 2 for the Task Manager")
  puts("Type 3 for PieDrop (TM) - Drone Delivery of Pizza")
  puts("Type 4 for Titleizr")
  puts("Type 6 to quit")
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
    puts(`clear`)
    while true
      all_tasks ||= []
      puts("Welcome to TaskManager! Please choose one of the following options:")
      puts("1 - A list of all tasks")
      puts("2 - Add new task")
      puts("3 - Mark task completed")
      puts("4 - Clear completed")
      puts("5 - Exit TaskManager")
      puts("")
      input = gets.chomp
      case input
	when "1"
	  puts "Listing all tasks:"
	  if all_tasks.empty?
            puts("No tasks found.")
	  else
	    all_tasks.each_with_index do |task, index|
	      puts("[#{task[:completed]}] #{index} - #{task[:description]}")
	    end
	  end
	  next
	when "2"
	  puts("Add new task description:")
	  task = { description: gets.chomp, completed: " " }
	  all_tasks << task
	  next
	when "3"
	  puts("Please enter the number of the task you’ve completed:")
	  all_tasks.each_with_index do |task, index|
	    puts("[#{task[:completed]}] #{index} - #{task[:description]}")
	  end
	  index = gets.chomp.to_i
	  all_tasks[index][:completed] = "\u2713"
	  puts(`clear`)
	  next
	when "4"
	  all_tasks = all_tasks.each_with_index.map { |task, index|
	     task if task[:completed] == " "
	  }.delete( nil )
	  next
	when "5"
	  puts(`clear`)
	  break
	default
	  puts("That is not a valid menu option.")
	  next
      end
    end


  # PieDrop
  elsif menu_choice == "3"
    puts("PieDrop (TM) - Drone Delivery of Pizza is currently in private beta...")

  # Quit
  elsif menu_choice == "4"
    puts("Tilteizr - Please enter a sentence to titleize:")
    input = gets.chomp
    sentence = input.split.map do |word|
      word.match(/^(a|are|the|is|and)$/) ? word : word.capitalize
    end
    puts("The titleized version of the string you entered is:")
    puts(sentence.join(" "))
    exit

  # Invalid main menu option
  else
    puts("Please choose a valid menu option")
  end
end
