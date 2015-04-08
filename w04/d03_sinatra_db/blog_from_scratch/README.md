1. Initialize rspec
  - `rspec --init`
- Write your RSpec
  - Think up a bunch of user stories and make some sweet ERDs
  - Translate your user stories into a bunch of `it "whatever"` statments *without* `do...end`
  - Write as much code as you can that would actually test those things, inside `do...end`
  - If you can't figure out how to test something, move on
- Create your Sinatra file structure
  - Add in a `views` folder, and make your `layout.erb`, including `<!DOCTYPE html>`, etc., and `<%= yield %>` somewhere
  - Add in a `models` folder for all of your models, oddly enough
  - Add a `controller.rb` file in the main directory
  -
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
- Set up your Gemfile
  - `touch Gemfile`
  - Include `source "https://rubygems.org"`
  - Put `gem "insert_gem_here"` for every gem you'll need
    - sinatra
    - sinatra-contrib
    - activerecord
  - Require all those gems in your controller
- Get all your Gems
  - `bundle install`
- Establish a Database connection
  - Make the database
  - Create some kind of main class that has methods that can connect to your database, clear all tables from it, and set up the tables you need
  - `require_relative` that class's file in your controller
- Create your ActiveRecord models
- `bundle exec ruby controller.rb`
- Create your Sinatra pages within your `controller.rb` file
  - Might be a good idea to create a `.erb` file in Views for each one
- Test your application with Postman
  - Download it from the Chrome app store (fo' free)
  - The only stuff you have to put in postman is/are:
    - Select the HTTP method you want
    - Enter in the url `localhost:4567`
    - Enter in the key/value pairs for all the parameters you want to send
