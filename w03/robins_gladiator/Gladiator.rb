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

