class CardsController < ApplicationController
  def index
    @cards = Card.all
    render json: @cards
  end

  def create
    @card = Card.create(card_params)
    render json: @card
  end

  def update
    @card = Card.find(params[:id])
    @card.update(card_params)
    render json: @card
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render nothing: true
  end

  def card_params
    params.require(:card).permit(:description, :completed)
  end
end
