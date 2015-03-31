class Drink < ActiveRecord::Base
  belongs_to :fridge
  validates :name, :size, :alcoholic, :presence => true
end
