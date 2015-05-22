class CreateHamlistsSongs < ActiveRecord::Migration
  def change
    create_join_table :hamlists, :songs
  end
end
