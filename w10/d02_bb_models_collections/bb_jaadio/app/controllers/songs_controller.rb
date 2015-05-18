class SongsController < ApplicationController
  def index
    @songs = Song.all
    render status: 200, json: @songs.to_json
  end

  def show
    @song = Song.find(params[:id])
    render status: 200, json: @song.to_json
  end

  def create
    render nothing: true
  end

  def update
    render nothing: true
  end

  def destroy
    render nothing: true
  end

  private
  def song_params
    params.require(:song).permit(:title, :audio_url, :album_art, :artist, :genre)
  end
end
