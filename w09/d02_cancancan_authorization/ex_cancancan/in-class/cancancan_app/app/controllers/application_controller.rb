class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user
  
  private
  def current_user
    session[:current_user] ? User.find_by(id: session[:current_user]) : nil
  end

  def authenticate
    redirect_to sign_in_path unless current_user
  end
end
