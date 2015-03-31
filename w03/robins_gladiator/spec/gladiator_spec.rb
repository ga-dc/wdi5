require_relative "../controller.rb"

describe Gladiator do
  gladiator = Gladiator.new("Bilbo", "club")
  it "has a name" do
    expect(gladiator.name.class).to be(String)
  end
  it "has a spear, club, or trident" do
    expect(Gladiator.allowed_weapons).to include(gladiator.weapon)
  end
end

describe Arena do
  subject (:arena) do
    Arena.new("colusseum")
  end

  it "has a name" do
    first_letter = arena.name[0]
    expect(first_letter).to eq(first_letter.upcase)
  end

  context "when adding new gladiators" do

    it "accepts an array of Gladiators" do
      arena.add_gladiator([Gladiator.new("Herman","spear"), Gladiator.new("Bob","club")])
      expect(arena.gladiators.count).to eq(2)
    end

    it "accepts a single Gladiator" do
      arena.add_gladiator(Gladiator.new("Bilbo","trident"))
      expect(arena.gladiators.count).to eq(1)
    end

    it "accepts a name and a weapon" do
      arena.add_gladiator("Hogar", "club")
      expect(arena.gladiators.count).to eq(1)
    end

    it "rejects non-gladiators" do
      arena.add_gladiator(123)
      expect(arena.gladiators.count).to eq(0)
    end

    it "has no more than 2 gladiators" do
      arena.add_gladiator("A","club")
      arena.add_gladiator("B","club")
      arena.add_gladiator("C","club")
      expect(arena.gladiators.count).to eq(2)
    end

  end

  context "when fighting" do

    it "does not allow fewer than 2 gladiators to fight" do
      expect(arena.fight).to be_falsey
    end

    it "allows 2 gladiators to fight" do
      arena.add_gladiator("A","club")
      arena.add_gladiator("B","club")
      expect(arena.fight).to be_truthy
    end

    it "lets gladiator with trident beat spear" do
      arena.add_gladiator("A","trident")
      arena.add_gladiator("B","spear")
      arena.fight
      expect(arena.winner.name).to eq("A")
    end

    it "lets gladiator with spear beat club" do
      arena.add_gladiator("A","club")
      arena.add_gladiator("B","spear")
      arena.fight
      expect(arena.winner.name).to eq("B")
    end

    it "lets gladiator with club beat trident" do
      arena.add_gladiator("B","club")
      arena.add_gladiator("A","trident")
      arena.fight
      expect(arena.winner.name).to eq("B")
    end

    it "produces a loser" do
      arena.add_gladiator("A","club")
      arena.add_gladiator("B","trident")
      arena.fight
      expect(arena.loser.name).to eq("B")
    end

    it "eliminates the losing gladiator" do
      arena.add_gladiator("A","club")
      arena.add_gladiator("B","trident")
      arena.fight
      expect(arena.gladiators.count).to eq(1)
    end

    it "eliminates gladiators with same weapons" do
      arena.add_gladiator("A","club")
      arena.add_gladiator("B","club")
      arena.fight
      expect(arena.gladiators.count).to eq(0)
    end
    
  end
end
