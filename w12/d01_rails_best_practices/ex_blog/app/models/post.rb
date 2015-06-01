class Post < ActiveRecord::Base
  has_many :comments
  scope :recent, -> { where("created_at > ?", 1.week.ago) }
end
