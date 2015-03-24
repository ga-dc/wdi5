random_animals = ["porpoise", "camel", "lobster", "kangaroo", "wombat", "chameleon"]

# Print out a plural version of each animal on a new line(ie porpoises, camels, etc)

random_animals.each do |animal|
  puts animal + "s"
end

# Return an array of the animals sorted alphabetically

p random_animals.sort

# Return an array of the animals sorted reverse alphabetically

p random_animals.sort.reverse

# Return an array of the animals with each individual string reversed

animals = random_animals.map do |animal|
  animal.reverse
end
p animals

# Return an array of the animals sorted by word length (low to high)

p random_animals.sort_by{ |animal| animal.length }

# Return an array of the animals sorted alphabetically by the last character in the string

p random_animals.sort_by{ |animal| animal[-1] }