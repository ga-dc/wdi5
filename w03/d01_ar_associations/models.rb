class Post < ActiveRecord::Base
  belongs_to :user, dependent: :destroy
  has_many :comments
end

class User < ActiveRecord::Base
  has_many :posts, dependent: :destroy
  has_many :comments
  validates :name, presence: true, uniqueness: true 
end

class Comment < ActiveRecord::Base
  belongs_to :post
  has_one :user
end

class CreateBlog < ActiveRecord::Migration
  def initialize
    create_table :users do |column|
      column.string :name
    end

    create_table :posts do |column|
      column.belongs_to :user
      column.text :content
    end

    create_table :comments do |column|
      column.belongs_to :post
      column.belongs_to :user
      column.text :content
    end
  end
end
