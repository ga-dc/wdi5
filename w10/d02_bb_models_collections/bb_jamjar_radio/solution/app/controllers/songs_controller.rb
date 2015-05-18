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
    @song = Song.new(song_params)
    if @song.save
      render json: @song.to_json, status: 200
    end
  end

  def update
    @song = Song.find(params[:id])
    if @song.update(song_params)
      render json: @song.to_json, status: 200
    end
  end

  def destroy
    @song = Song.find(params[:id])
    if @song.destroy
      render json: @song.to_json, status: 200
    end
  end

  private
  def song_params
    params.require(:song).permit(:title, :audio_url, :album_art, :artist, :genre)
  end
end
