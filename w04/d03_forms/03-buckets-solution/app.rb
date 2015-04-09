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

get '/items/new' do
  erb :"items/new"
end

post '/items' do
  @item = Item.new( title: params[:title], description: params[:description] )
  if @item.save
    redirect "/items/#{@item.id}"
  end
end

get '/items/:id' do
  @item = Item.find( params[:id] )
  erb :"items/show"
end

delete '/items/:id' do
  @item = Item.find( params[:id] )
  @item.destroy
  redirect '/'
end

get '/items/:id/edit' do
  @item = Item.find( params[:id] )
  erb :"items/edit"
end

patch '/items/:id' do
  @item = Item.find( params[:id] )
  if @item.update( title: params[:title], description: params[:description] )
    redirect "/items/#{params[:id]}"
  end
end

get '/items/:item_id/comments/:id/edit' do
  @comment = Comment.find( params[:id] )
  erb :"comments/edit"
end

patch '/items/:item_id/comments/:id' do
  @comment = Comment.find( params[:id] )
  @comment.update( body: params[:body] )
  redirect "/items/#{params[:item_id]}"
end

post '/items/:id/comments' do
  @item = Item.find( params[:id] )
  @item.comments.create( body: params[:body] )
  redirect :"/items/#{@item.id}"
end

delete '/items/:item_id/comments/:id' do
  @comment = Comment.find( params[:id] )
  @comment.destroy
  redirect "/items/#{params[:item_id]}"
end