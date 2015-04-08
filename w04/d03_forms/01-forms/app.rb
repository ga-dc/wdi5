require 'sinatra'
require 'sinatra/reloader'

$students = ['Jamie','Jameel','Janet']
get '/' do
  @students = $students
  erb :index
end