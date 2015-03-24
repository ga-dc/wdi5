require 'pry'
hammonds_mines = {
  :nicaragua => {
    :depth => "200 meters",
    :annual_budget => 1_500_000,
    :specimens => [
      "Tyrannosaurus Rex",
      "Stegosaurous",
      "Triceratops",
      "Velociraptor"
    ]
  },
  :buenos_aires => {
    :depth => "400 meters",
    :annual_budget => 1_000_000,
    :specimens => [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  :mexico => {
    :depth => "350 meters",
    :annual_budget => 900_000,
    :specimens => [
      "Gallimimus",
      "Parasaurolophus"
    ]
  }
}

# Access the depth of John Hammond's mine in Mexico.

puts hammonds_mines[:mexico][:depth]

# Access the annual budget for Hammond's mine in Buenos Airies.

puts hammonds_mines[:buenos_aires][:annual_budget]

# Access the stegosaurous.

puts hammonds_mines[:nicaragua][:specimens][1]

# Access the dinosaur DNA specimens found in Nicaragua.

p hammonds_mines[:nicaragua][:specimens]

# Access the "Parasaurolophus" specimen.

puts hammonds_mines[:mexico][:specimens][1]

# Your budget has been cut. Return an array, `low_budget_mines`, of only the mines with a budget at or below `100_000_

low_budget_mines = hammonds_mines.select do |mine|
  hammonds_mines[mine][:annual_budget] <= 100_000_000
end
p low_budget_mines

# Your budget has been re-upped and you've decided you're going to open a park using the DNA specimens found in Nicaragua (they're the most popular). __But there's a big problem__; It's a liability to create dinosaurs that can breed in the wild, so you have to add a dash of asexual frog dna to ensure they can't breed, __but you can't ruin the original specimens__. Thankfully, you have an ace programmer, Dennis Nedrey, who tells you about a hot new array method called `map`, which allows you to create a new array based on another. Create an array of dinosaurs specimens, each "with a dash of asexual frog DNA".

dinosaurs = hammonds_mines.map do |mine|
  mine[1][:specimens].map do |specimen|
    specimen += " with a dash of asexual frog DNA"
  end
end

p dinosaurs.flatten