require 'pry'
require_relative 'classes/apartment'
require_relative 'classes/person'

Apartment.new("123 Main St", 1200, 1200, 1, 2, [])
Apartment.new("456 Main St", 1200, 1200, 2, 2, [])
Apartment.new("78923 Main St", 1200, 1200, 2, 2, [])
Apartment.new("298 Main St", 1200, 1200, 2, 2, [])


loop do
  puts "Welcome to the Apartment Tracker!"
  puts "Please choose one of the following:"
  puts "1) List all apartments"
  puts "2) View apartment details"
  puts "3) Add an apartment"
  puts "4) Add a tenant to an apartment"
  puts "5) Quit"
  input = gets.chomp
  case input
    when "1"
      Apartment.list_all
      next
    when "2"
      Apartment.list_all
      puts "Please enter the number that youd like to view"
      apartment_index = gets.chomp.to_i
      puts Apartment.all[apartment_index]
      next
    when "3"
      puts "Creating new apartment"
      puts "enter address:"
      address = gets.chomp
      puts "enter monthly rent:"
      rent = gets.chomp
      puts "enter sqft:"
      sqft = gets.chomp
      puts "enter num beds:"
      beds = gets.chomp
      puts "enter baths:"
      baths = gets.chomp
      apt = Apartment.new( address, rent, sqft, beds, baths, [])
      puts "Aparment created successfully! :"
      puts apt
    when "4"
      # add a tenant to an apartment
        # create a new user 
        puts "Please enter person's name:"
        name = gets.chomp 
        puts "Please enter person's age:"
	age = gets.chomp
        puts "Please enter person's gender:"
	gender = gets.chomp
	person = Person.new(name, age, gender)
	puts "Which apartment do you want this person to live in?"
	apt_number = gets.chomp.to_i
	apt = Apartment.all[apt_number]
	if apt.renters.length >= apt.beds
	  puts "this apartment is full! :("
	else
	  apt.renters << person
	  puts "#{person.name} now lives on #{apt.address}"
	end
        #  get an apartment 
      
    when "5"
      puts "kthxbye."
      break
  end



end
