class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:current_user] = user.id
      redirect_to root_path
    else
      redirect_to sign_in_path
    end
  end

  def destroy
    session[:current_user] = nil
    redirect_to root_path
  end
end
