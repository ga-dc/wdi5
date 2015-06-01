class Post < ActiveRecord::Base
  CATEGORIES = ["animals", "lolcats", "politics"]

  has_many :comments
  scope :recent, -> { where("created_at > ?", 1.week.ago) }
end
