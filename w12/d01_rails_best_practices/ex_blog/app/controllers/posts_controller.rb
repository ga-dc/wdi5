class PostsController < ApplicationController
  def index
    @posts = Post.recent
  end

  def show
    @post = Post.find(params[:id])
  end
end
