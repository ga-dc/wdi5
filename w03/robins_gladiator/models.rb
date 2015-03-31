class Arena
  attr_accessor :name, :gladiators, :winner, :loser

  def initialize name, gladiators = []
    @name = name.capitalize
    @gladiators = gladiators
    @winner = false
  end

  def list_gladiators
    if @gladiators.empty?
      puts "There ain't no gladiators."
    else
      puts "Introducing the gladiators:"
      @gladiators.each do |gladiator|
	puts "#{gladiator.name} wields a #{gladiator.weapon}."
      end
    end
  end

  def add_gladiator inputA = nil, inputB = nil
    case inputA
    when String
      birth_gladiator(Gladiator.new(inputA, inputB))
    when Gladiator
      birth_gladiator(inputA)
    when NilClass
      birth_gladiator(Gladiator.new)
    when Array
      inputA.each do |gladiator|
	birth_gladiator(gladiator)
      end
    else
      puts "I don't know how to birth gladiators from this."
    end
  end

  def birth_gladiator gladiator
    if @gladiators.count < 2
      @gladiators << gladiator
    else
      puts "You already have 2 gladiators!"
    end
  end

  def remove_gladiator name = nil
    if name == nil
      puts "Which gladiator do you want to dismiss?"
      name = gets.chomp.to_s.capitalize
    end
    index = 0
    num_gladiators = @gladiators.count
    while index < num_gladiators
      if @gladiators[index].name == name
	@gladiators.delete_at(index)
      end
      index += 1
    end
    if num_gladiators == @gladiators.count
      puts "#{name} isn't a gladiator!"
    end
  end

  def fight
    if @gladiators.count == 2
      @winner = Fight.new(@gladiators[0], @gladiators[1]).winner
      determine_the_victor
      return true
    else
      puts "You need #{2 - @gladiators.count} more gladiator(s) to fight!"
      return false
    end
  end

  def determine_the_victor
    if !@winner
      puts "The gladiators eliminated each other!"
      @gladiators = []
    else
      @gladiators.delete(@winner)
      @loser = @gladiators[0]
      @gladiators = [@winner]
      puts "#{@winner.name} defeated #{@loser.name} with his mighty #{@winner.weapon}!"
    end
  end

end

class Gladiator
  
  attr_accessor :name, :weapon 

  def self.allowed_weapons
    return ["trident", "spear", "club"]
  end

  def initialize name = nil, weapon = nil
    christen name
    arm_with weapon
  end

  def christen name = nil
    until /^[a-zA-Z\-]+$/.match(name)
      puts "Give the gladiator a name."
      name = gets.chomp
    end
    @name = name.capitalize
  end

  def arm_with weapon = nil
    until Gladiator.allowed_weapons.include? weapon
      puts "Give #{@name} a trident, spear, or club."
      weapon = gets.chomp.to_s.downcase
    end
    @weapon = weapon
  end
end

class Fight

  attr_accessor :winner

  def initialize gladiatorA, gladiatorB
    if gladiatorA.name == "Maximus"
      @winner = gladiatorA
    elsif gladiatorB.name == "Maximus"
      @winner = gladiatorB
    elsif test [gladiatorA.weapon, gladiatorB.weapon]
      @winner = gladiatorA
    elsif test [gladiatorB.weapon, gladiatorA.weapon]
      @winner = gladiatorB
    else
      @winner = false
    end
  end

  def test weapons
    if weapons == ["trident", "spear"] || weapons == ["spear", "club"] || weapons == ["club", "trident"]
      return true
    else
      return false
    end
  end

end
