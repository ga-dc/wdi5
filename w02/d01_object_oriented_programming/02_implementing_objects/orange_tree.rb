class OrangeTree
  def initialize height = 0
    @height = height 
  end
  def height
    @height
  end
  def one_year_passes
    @height = @height + 1
  end
end

tree = OrangeTree.new(36)
p tree.one_year_passes
tree = OrangeTree.new
p tree.one_year_passes
p tree.one_year_passes
p tree.one_year_passes
p tree.one_year_passes
p tree.one_year_passes
