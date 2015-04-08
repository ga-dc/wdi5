require 'pry'
require 'active_record'
require 'sinatra'
require 'sinatra/reloader'
require_relative 'models/item'
require_relative 'models/comment'
require_relative 'db/connection'

get '/' do
  @items = Item.all
  erb :"items/index"
end

get '/items/:id' do
  @item = Item.find( params[:id] )
  erb :"items/show"
end