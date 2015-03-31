require_relative "models.rb"

class Run

  def initialize
    puts "Name your arena!"
    @arena = Arena.new(gets.chomp.to_s)
    menu
  end

  def menu
    while true
      puts "(List) all gladiators, (Add) a gladiator, (Remove) a gladiator, Make your gladiators (fight), (Quit)"
      case gets.chomp.to_s.downcase
      when "list"
	@arena.list_gladiators
      when "add"
	@arena.add_gladiator
      when "remove"
	@arena.remove_gladiator
      when "fight"
	@arena.fight
      when "quit"
	puts "You leave the arena, and it vanishes into thin-air because this program doesn't have data persistence."
	break
      else
	puts "That's not a valid input."
      end
    end
  end

end

