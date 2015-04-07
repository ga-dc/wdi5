require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @array = ["Robin is weird", "Hello", "Clown hats"]
  erb :index
end

get '/contacts' do
  @contacts = { 'Adam' => "(202) 867-5309",
  'Jesse' => "(123) 456-7890",
  "Robin" => "(513) 174-0410"
  }
  erb :contacts
end

get '/firetruck' do
  @array = ["Robin is weird", "Hello", "Clown hats"]
  erb :index, :layout => :firetruck
end
