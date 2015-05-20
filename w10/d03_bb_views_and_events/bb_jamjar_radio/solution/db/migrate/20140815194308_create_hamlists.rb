class CreateHamlists < ActiveRecord::Migration
  def change
    create_table :hamlists do |t|
      t.string :name
    end
  end
end
