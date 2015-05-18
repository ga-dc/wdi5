require 'httparty'

Hamlist.all.each do |hamlist|
  hamlist.songs = []
end

Song.destroy_all
Hamlist.destroy_all

artists = [
  "nosaj+thing",
  "flume",
  "kendrick+lamar",
  "beatles",
  "daft+punk",
  "drake",
  "killers",
  "m83",
  "ratatat"
]

artists.each do |artist|
  # make all the assumptions!
  results = JSON.parse(HTTParty.get("https://itunes.apple.com/search?term=#{artist}"))["results"];
  results[0...10].each do |result|
    puts result["trackName"]
    Song.create({
      title: result["trackName"],
      audio_url: result["previewUrl"],
      album_art: result["artworkUrl100"],
      artist: result["artistName"],
      genre: result["primaryGenreName"]
    })
  end
end

chill = Hamlist.create(name: 'Chill')
intense = Hamlist.create(name: 'Intense')
workout = Hamlist.create(name: 'Workout')
sleep = Hamlist.create(name: 'Sleep')

songs = Song.all.shuffle

songs[0..8].each do |song|
  chill.songs << song
end

songs[9..15].each do |song|
  intense.songs << song
end

songs[16..28].each do |song|
  workout.songs << song
end

songs[29..34].each do |song|
  sleep.songs << song
end
