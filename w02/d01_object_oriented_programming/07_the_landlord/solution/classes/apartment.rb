class Apartment
  attr_accessor :address, :monthly_rent, :sqft, :beds, :baths, :renters
  @@all = []
  def initialize address, monthly_rent, sqft, beds, baths, renters
    @address = address
    @monthly_rent = monthly_rent
    @sqft = sqft
    @beds = beds
    @baths = baths
    @renters = renters
    @@all << self
  end
  def self.all
    @@all
  end
  def self.list_all
    @@all.each_with_index do |apt, index|
      puts "#{index} #{apt.address}"
    end
  end
  def to_s
    if @renters.empty?
      "#{@address}, $#{@monthly_rent}/m, #{@sqft} sqft, #{@beds} beds"
    else
      "#{@renters[0].name} lives on #{@address}"
    end
  end
end
