require 'httparty'

def get_spotify_uri(song)
  song = song.title.gsub(" ", "+")
  puts "fetching resources.."
  response = HTTParty.get("http://ws.spotify.com/search/1/track.json?q=#{song}")
  puts "done"
  response["tracks"][0] ? response["tracks"][0]["href"] : ""
end

class Song
  attr_reader :title
  def initialize title
    @title = title
  end
end

puts get_spotify_uri( Song.new('Last') )