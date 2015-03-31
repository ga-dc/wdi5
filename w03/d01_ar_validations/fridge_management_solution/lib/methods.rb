
def list_all_fridges
  Fridge.all.each do |f|
    puts "Fridge # #{f.id} is#{f.brand} brand. Located at #{f.location}. Size is #{f.size} cubic feet."
  end
end

def add_fridge
  puts "Where is the fridge?"
  location = gets.chomp
  puts "What brand is the fridge?"
  brand = gets.chomp
  puts "How large is the fridge in cubic feet?"
  size = gets.chomp.to_i
  Fridge.create(location: location, brand: brand, size: size)
end

def get_fridge
  puts "Which fridge?"
  list_all_fridges
  return gets.chomp.to_i
end

def remove_fridge(fridge_id)
  Fridge.find(fridge_id).delete
  puts "Your fridge was deleted."
end

def list_foods(fridge_id)
  fridge = Fridge.find(fridge_id)
    if fridge.foods.empty?
      puts "Go to the store, this fridge is empty"
    else
      fridge.foods.each do |food|
        puts "##{food.id}) #{food.name} -- Current weight: #{food.weight}. It is #{food.vegan} that this food is vegan."
      end
    end
end

def add_food(fridge_id)
  fridge = Fridge.find(fridge_id)

  puts "What food would you like to add"
  name = gets.chomp
  puts "How much does #{name} weigh (lbs.)?"
  weight = gets.chomp.to_f
  puts "Is #{name} vegan? (yes/no)"
  vegan = gets.chomp.downcase

    if vegan == "yes"
      vegan = true
    elsif vegan == "no"
      vegan = false
    else
      vegan = nil
    end

    fridge.foods.create(name: name, weight: weight, vegan: vegan)
end

def eat_food(fridge_id)
  puts "What food would you like to eat?"
  list_foods(fridge_id)
  food_id = gets.chomp.to_i
  Food.find(food_id).delete
  puts "Yum!"
end

def list_drinks(fridge_id)
  fridge = Fridge.find(fridge_id)
  if fridge.drinks.empty?
    puts "There might be tap water but the fridge is drinkless"
  else
    fridge.drinks.each do |drink|
      puts "##{drink.id}) #{drink.name} -- Current oz: #{drink.size}. It is #{drink.alcoholic} that this drink is alcoholic."
    end
  end
end

def add_drink(fridge_id)
  fridge = Fridge.find(fridge_id)

  puts "What drink would you like to add"
  name = gets.chomp
  puts "How many oz is #{name}?"
  size = gets.chomp.to_f
  puts "Is #{name} alcoholic? (yes/no)"
  alcoholic = gets.chomp.downcase

    if alcoholic == "yes"
      alcoholic = true
    elsif alcoholic == "no"
      alcoholic = false
    else
      alcoholic = nil
    end

    fridge.drinks.create(name: name, size: size, alcoholic: alcoholic)
end

def consume_partial_drink(fridge_id)
  list_drinks(fridge_id)
  puts "Which drink?"
  drink_id = gets.chomp.to_i
  puts "How many oz did you drink?"
  drank = gets.chomp.to_i
  beverage = Drink.find(drink_id)
  new_total = beverage.size.to_i - drank
  beverage.update(size: new_total)
end

def consume_total_drink(fridge_id)
  puts "What drink would you like to consume?"
  list_drinks(fridge_id)
  drink_id = gets.chomp.to_i
  Drink.find(drink_id).delete
  puts "Burb!!!"
end
