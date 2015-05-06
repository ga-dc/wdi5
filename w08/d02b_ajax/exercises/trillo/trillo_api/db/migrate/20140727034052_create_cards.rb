class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :description
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
