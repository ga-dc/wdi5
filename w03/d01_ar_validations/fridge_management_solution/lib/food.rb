class Food < ActiveRecord::Base
  belongs_to :fridge
  validates :name, :weight, :vegan, :presence => true
end
