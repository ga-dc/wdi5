# Da Quiz

=begin
Your solutions to all the problems below (except for Problem 0) should be included in this file.
=end

## Problem 0
=begin
As you would with a regular homework assignment, please copy this file to your student homework folder for ‘w04/d05’, make the necessary edits, push it, and then make a pull request.

The instructors will not provide assistance. If you can NOT create the PR, please copy and paste the file as a public Gist (https://gist.github.com/), and share the link with the instructors as an issue in the homework repository.
=end

#####################################
# Number 1
# Please rewrite the following mess as proper code:

class doctor << ActiveRecord:Base

def initialize
end

def has_degree?
puts "true"
end

def specialty
return @Specialty

validates :presence, :name => true

end

# Number 1: Answer:

class Doctor < ActiveRecord::Base
  validates :name, presence: true

  # do not use initialize with AR

  def has_degree?
    return true
  end

  def specialty
    return @specialty
  end
end

#####################################
# Number 2
# Given an app.rb file for our Doctor, create the route methods (signature only) you'd need for full CRUD functionality.
# Bonus: fill in each route method with appropriate code

# app.rb
require 'sinatra'
require 'sinatra/reloader'
require ‘active_record’
require ‘pg’

get ‘/doctors’ do
  #index
end

get ‘/doctors/:id’ do
  # show
end

get ‘/doctors/:id/new’ do
  # new
end

post ‘/doctors’ do
  #create
end

get ‘/doctors/:id/edit’ do
  # edit
end

# two options for update
put ‘/doctors/:id’ do
  # update #1
end
# or…
put ‘/doctors/:id/update’ do
 # update #2
end

# two options for delete
delete ‘/doctors/:id’ do
  #delete #1
end
# or…
delete ‘/doctors/:id/delete’ do
  #delete #2
end


#####################################
# Number 3
#A) We want a link, showing the doctor’s name, on our page that will go to the show page for an individual doctor: {id: 14, name: ‘Patch Adams’, specialty: ‘Laughter is the Best Medicine’}
  # Please write out what this link would look like rendered as pure HTML
  ` <a href=”/doctors/14’>Patch Adams</a>`

# B) Select from below the how this link would look when we write it out in our ERB view.
# 1) `<link src="/doctors/id" method="get"/>Patch Adams</a>`

      ###### THIS IS THE CORRECT ANSWER ######
# 2) `<a href="/doctors/<%=doctor.id%>"><%= doctor.name %></a>`
      #########################################

# 3) `<button type="submit" class="doctors_id"/>Dr. Seuss</a>`
# 4) `<a href="/show/<%=:id%>"><% doctor.name %></a>`


#####################################
# Number 4
# List 4 important components of the Request/Response Cycle on the Web:

## Number 4 Answers
=begin
- User/Client/Browser
- Server
- Controller/Router/app.rb
- Model
- Database
- View
- There are other options that we would accept as well.
=end

# Number 5
# Given the following:

def get_words(word_type, word_category, word_index)
  madlibs_options = {
    :noun => {:names => ["Robin", "Matt", "Andy"],
              :objects => ["Chair", "Platypus", "Cheeto"]},
    :verb => {:happy => ["Dance", "Jam Out", "Play", "Code"],
              :mean => ["Fight", "Yell", "Stab"]},
    :adjective => {:funny => ["Weird", "Special", "Squishy"],
                   :physical => ["Solid", "Tall", "Stumpy"]}
  }
  madlibs_options[word_type][word_category][word_index]
end

def madlib_sentence(noun, verb, adjective)
  puts "The #{noun} can #{verb} in a #{adjective} manner"
end

noun = get_words(:noun, ?, ?)
verb = get_words(?, :happy, ?)
adjective = (?, ?, 2)
madlib_sentence(noun, verb, adjective)

=begin
- You are to finish building the `get_words` methods (by replacing the question marks) so that they will return the proper words to print this `madlib sentence`:
“The Platypus can Jam Out in a Stumpy manner”
=end

## Number 5: Answer
noun = get_words(:noun, :objects, 1)
verb = get_words(:verb, :happy, 1)
adjective = get_words(:adjective, :physical, 2)
madlib_sentence(noun, verb, adjective)

