require 'sinatra'
require 'sinatra/reloader'

$objectives = [
  "Slips.",
  "Explain what REST is and why we use it",
  "List the HTTP request verbs",
  "Describe what Sinatra is and what it is used for",
  "Distinguish between a route and a path",
  "Define routes using Sinatra",
  "Define routes with URL parameters and access those parameters",
  "Explain what HTML is and what problem it solves",
  "Explain the different roles of HTML, CSS & JavaScript in the web technology stack",
  "Describe what the DOM is and its importance in the web technology stack",
  "Explain the purpose of HTML attributes",
  "Describe the differences between the <head> and <body> tags",
  "Describe how content other than HTML documents are organized and accessed on the web",
  "Create HTML elements using tags and attributes",
  "Create a well formed HTML document that nests elements within each other",
  "Include images on a webpage",
  "Link from one webpage to another",
  "Define what CSS is and explain its role in separation of concerns",
  "Identify the three places that CSS styles can go",
  "Explain what selectors are, and how they target HTML elements",
  "Explain the major parts of the box model",
  "Explain the difference between inline and block elements",
  "Create an external stylesheet, and link it into an HTML document",
  "Explain what selector specificity is, and how it is calculated",
  "Explain the use of multiple fonts using font-family",
  "Explain the difference between padding and margin"
]

get '/:index?' do
  @index = params[:index].to_i
  if params[:index]
    @next = params[:index].to_i + 1
  else
    @next = 1
  end
  @slip = $objectives[ @index ]
  erb :slip
end