class Fridge < ActiveRecord::Base
  has_many :foods
  has_many :drinks
  validates :location, :brand, :size, :presence => true

end
