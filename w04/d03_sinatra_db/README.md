# How to start a Sinatra app
## (And more-or-less any other Ruby app)

1. Make a folder in which to work on your project
  - Do NOT just make the folder on your Desktop, or in your "home" (`~`) folder. Otherwise, your computer will get all cluttered up and it'll be hard to find anything. At the very least, have a "projects" folder. If this is an assignment for class, it should be in an appropriate folder in your GA directory.
- Initialize rspec
  - `cd` into the folder you just made, then `rspec --init`
- Plan your app with RSpec
  - Think up a bunch of user stories and make some sweet ERDs
  - Translate your user stories into *as many* `it "whatever"` statments as you can, **without** `do...end`. This makes your tests show up as "pending" (i.e. you haven't actually written the tests yet.)
- Make your tests fail; add in the `do...end` blocks
  - Add in the `do...end` blocks. Then, inside them, write code that would logically perform that test.
  - Keep each test to a maximum of 5 lines
  - If you can't figure out how to test something, move on
- Create your Sinatra file structure
  - Create a `views` folder, and inside it create your `layout.erb` file, which should include `<!DOCTYPE html>`, etc., and `<%= yield %>` somewhere
  - Create a `models` folder for all of your models/classes
  - Create a `controller.rb` file in the main directory. This will be the thing that you "run"
- Set up your Gemfile
  - `touch Gemfile`
  - At the top of it, write `source "https://rubygems.org"`. This is the URL from which Bundler will get any missing gems.
  - Write `gem "insert_gem_here"` for every gem you'll need. For example:
- Have Bundler get all your gems
  - `bundle install`
- Establish a Database connection
  - Make the database in PSQL
  - Create a class that has methods that can connect to your database, clear all tables from it, and set up the tables you need
- Create your ActiveRecord models
- `require` the necessary files in your controller
  - All the gems that Bundler installed, all of your models, etc.
- Launch your app, and Sinatra
  - `bundle exec ruby controller.rb`
- Add the different HTTP/CRUD methods in your `controller.rb` file
  - `get "/" do...end`, `post "/" do...end` and so on
  - Might be a good idea to create a `.erb` file in your views directory for each one
- Test your application with Postman
  - Download it from the Chrome app store (fo' free)
  - The only stuff you have to put in postman is/are:
    - Select the HTTP method you want
    - Enter in the url `localhost:4567`
    - Enter in the key/value pairs for all the parameters you want to send

### An example directory tree
```
  .
├── Gemfile
├── Gemfile.lock
├── README.md
├── controller.rb
├── models
│   ├── blog.rb
│   └── post.rb
├── spec
│   ├── blog_spec.rb
│   └── spec_helper.rb
└── views
    ├── delete.erb
    ├── get.erb
    ├── layout.erb
    ├── post.erb
    └── put.erb
```

### An example Gemfile
```
source "https://rubygems.org"

gem "sinatra"
gem "sinatra-contrib"
gem "activerecord"
gem "pry"
```
