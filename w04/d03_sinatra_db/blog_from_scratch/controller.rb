require "sinatra"
require "sinatra/reloader"
require "active_record"

require_relative "models/blog.rb"
require_relative "models/post.rb"

Blog.connect
# Blog.clear
# Blog.setup

get "/" do
  @posts = Post.all

  erb :get
end

post "/" do
  new_content = params[:content]
  @post = Post.create(content: new_content)

  erb :post
end

put "/" do
  id = params[:id].to_i
  new_content = params[:content]
  @post = Post.find(id)
  @post.update(content: new_content)

  erb :put
end

delete "/" do
  id = params[:id]
  if Post.exists? (id)
    @post = Post.find(id)
    @post.destroy
    @message = "Oh, dear. You just blew up post #{@post.id}."
  else
    @message = "That post doesn't exist."
  end

  erb :delete
end
