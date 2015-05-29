class PostsController < ApplicationController
  def index
    @posts = Post.all.includes(:comments)
  end

  def show
    @post = Post.find(params[:id])
  end
end
