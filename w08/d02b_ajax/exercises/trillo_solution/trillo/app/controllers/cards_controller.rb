class CardsController < ApplicationController
  def index
    @cards = Card.all
    render json: @cards
  end

  def create
    @card = Card.create(card_params)
    render json: @card
  end

  def card_params
    params.require(:card).permit(:description, :created)
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render nothing: true
  end
end
