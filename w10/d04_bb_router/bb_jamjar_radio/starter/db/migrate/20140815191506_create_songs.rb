class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :audio_url
      t.string :album_art
      t.string :artist
      t.string :genre
    end
  end
end
