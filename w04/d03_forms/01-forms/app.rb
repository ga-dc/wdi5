require 'sinatra'
require 'sinatra/reloader'

$students = ['Jamie','Jameel','Janet']
get '/' do
  @students = $students
  if params["query"]
    @students = @students.select{ |student|
      student.match( params["query"] ) 
    }
  end
  erb :index
end

post '/students' do
  $students << params["student_name"]
  redirect '/'
end