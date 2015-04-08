require "active_record"
require "sinatra"
require "sinatra/reloader"

require_relative "db/connection.rb"
require_relative "db/models.rb"

set :environment, :development

DB.open

get "/" do
  @posts = Post.order(:id)

  erb :show_posts
end

put "/" do
	id = params[:id]
  if !params[:id]
    @message = "You didn't include a post number!"
	elsif Post.exists?(id) && params[:content]
		Post.find(id).update(content: params[:content])
    @message = "Edited post &num;#{params[:id]}"
	else
    @message = "Couldn't find post &num;#{params[:id]}"
  end

  erb :update
end

post "/" do
  if params[:content]
    post = Post.create(content: params[:content])
    @message = "Created post #{post.id}"
  else
    @message = "Include some content, dummy"
  end

  erb :create
end

delete "/" do
  id = params[:id]
  if Post.exists?(id)
    Post.destroy(id)
    @message = "Destroyed post #{params[:id]}"
  else
    @message = "Couldn't find post #{params[:id]}"
  end

  erb :destroy
end

get "/reset" do
  DB.clear
  DB.setup
  redirect to("/")
end
