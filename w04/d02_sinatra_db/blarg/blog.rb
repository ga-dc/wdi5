require "active_record"
require "sinatra"
require "sinatra/reloader"

require_relative "db/connection.rb"
require_relative "db/models.rb"

set :environment, :development

DB.open

get "/" do
  @posts = []
  Post.all.each do |post|
    @posts << post
  end

  erb :posts
end

get "/reset" do
  DB.clear
  DB.setup
  redirect to("/")
end

get "/delete/:id" do
    id = params[:id]
    if Post.find(id)
      Post.destroy(id)
    end
    redirect to("/")
end

post "/" do
  Post.create(content: params[:content])
  redirect to("/")
end
