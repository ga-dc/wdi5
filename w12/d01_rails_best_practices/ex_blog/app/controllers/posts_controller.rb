class PostsController < ApplicationController
  def index
    @posts = Post.recent
  end

  def search
    @posts = Post.where("title = ?", params[:search_term])
    #  BAD! SQL INJECTION VULNERABILITY
    # @posts = Post.where("title = #{params[:search_term]}")
  end
  def show
    @post = Post.find(params[:id])
  end
end
