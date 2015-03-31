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
