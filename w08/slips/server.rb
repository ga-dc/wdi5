require "sinatra"

def random_color
	color_hex = ["0","1","2","3","4","5","6"]
	color = []
	6.times do
		color << color_hex.sample
	end
	color.join("")
end

slips = [
	"Write a Ruby class with an initialize method.",
	"List two Ruby Enumerators and give their purpose.",
	"Explain what ERB is and why we use it.",
	"Define the purpose of the 'action' and 'method' attributes of a form.",
	"List at least 3 methods added to a class when it inherits from ActiveRecord::Base.",

	"What is the purpose of `params`? Also list three ways in which Rails puts data in it.",
	"Describe how the 'session' hash works in Ruby. Why might Chewbacca use it?",

	"Explain how to represent one-to-many relationships in AR (including DB columns).",
	"Explain what active record validations are for, and give an example of one.",
	"Explain what an ORM is and why they are useful.",
	"Describe the MVC (or rMVC) paradigm as it relates to Rails.",
	"Give an example usage of the 'link_to' method in Rails.",

	"Describe the difference between what is truthy/falsey in Ruby vs JavaScript?",
	"Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.",
	"Write a JavaScript Object literal with at least one property and one method (e.g. a person).",
	"Describe the difference between variables created with and without `var`.",
	"Define what a function is in Javascript and how it compares to a Ruby method.",

	"Differentiate between function declarations and expressions.",
	"Explain the difference between referencing and invoking a function.",
	"Explain the concept of events and event driven programming.",
	"Explain the concept of a <strike>doge</strike> 'callback' function.",
	"Explain the difference between synchronous and asynchronous execution."
]

all_students = {"milk" => %w(Aaron Adrian Ali Ammie Brittany Damon Diana Don Eltahir Enoch Gwen Haleigh Isatu Janice Jocelyn Kevin Michael Nicholas Ryan Tamara Toby),
						     "cookies" => %w(Alif Allyson Biboy Brad Chad Jared John Julia Karen Keith Lindsey Matt Nabil Nick Noah Parmeet Phillip Preston Rodger Sarah Tyler Zachary)}


slips_used = []
students_used = []

get '/' do
	slips.shuffle!

	students = all_students[params[:class]]
	students.shuffle!

	@slip = slips.pop
	@student = students.pop
	@background_color = random_color

	slips_used << @slip
	students_used << @student
	@students_used_out = students_used.dup

	if(slips.length == 0 || students.length == 0 || params[:reset] == "true")
		slips = slips + slips_used.dup
		students = students + students_used.dup
		slips_used.clear
		students_used.clear
	end

	erb :index
end
