class Item < ActiveRecord::Base
  has_many :comments
end