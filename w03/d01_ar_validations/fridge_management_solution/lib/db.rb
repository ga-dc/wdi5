require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => "postgresql",
  :host => "localhost",
  :database => "kitchen_db"
)

class CreateKitchen < ActiveRecord::Migration

  def initialize
    create_table :fridges do |column|
      column.string :location
      column.string :brand
      column.integer :size

    end

    create_table :foods do |column|
      column.belongs_to :fridge
      column.string :name
      column.integer :weight
      column.boolean :vegan
      column.timestamps
    end

    create_table :drinks do |column|
      column.belongs_to :fridge
      column.string :name
      column.integer :size
      column.boolean :alcoholic
    end
  end
end
