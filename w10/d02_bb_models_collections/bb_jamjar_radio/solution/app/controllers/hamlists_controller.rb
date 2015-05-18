class HamlistsController < ApplicationController
  def index
    @hamlists = Hamlist.all
    render status: 200, json: @hamlists.to_json
  end

  def show
    @hamlist = Hamlist.find(params[:id])
    render status: 200, json: @hamlist.to_json
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
  def hamlist_params
    params.require(:hamlist).permit(:name)
  end
end
