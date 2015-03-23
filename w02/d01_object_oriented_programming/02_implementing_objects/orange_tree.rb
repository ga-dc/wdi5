$global_var = "evil :("

class OrangeTree
  attr_accessor :height, :age
  @@total_orange_trees = 0
  def initialize height = 0, age = 0
    puts $global_var
    @@total_orange_trees += 1
    #puts "#{@@total_orange_trees} total oranges so far."
    @age = age
    @height = height 
  end
  def one_year_passes
    age = "#{@age} years old"
    puts "age is #{age}"
    @height = @height + 1
  end
  def self.total_trees
    @@total_orange_trees
  end
end

tree = OrangeTree.new(36, 2)
tree = OrangeTree.new(36, 2)
tree = OrangeTree.new(36, 2)
tree = OrangeTree.new(36, 2)
tree = OrangeTree.new(36, 2)

puts OrangeTree.total_trees






















