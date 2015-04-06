require "sinatra"
require "sinatra/reloader"
require "active_record"
require_relative "connection.rb"
require_relative "models.rb"

set :environment, :development

DB.open

get "/" do
  if params[:reset]
    DB.clear
    DB.setup
  end

  if params[:delete]
    id = params[:delete]
    if Post.find(id)
      Post.destroy(params[:delete])
    end
    redirect to("/")
  end
  
  @posts = []
  Post.all.each do |post|
    @posts << post
  end

  erb :template
end

post "/" do
  Post.create(content: params[:content])
  redirect to("/")
end
