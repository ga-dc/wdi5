![](http://www.kylembrown.com/wp-content/uploads/2013/11/logo.png)
# Sinatra Views

### Learning Objectives
- Abstract HTML out of your main Sinatra file and into a template.
- Explain what ERB is and why we use it.
- Use ERB to execute Ruby code in the view templates.
- Explain the convention over configuration in relation to Sinatra views.
- Pass a variable from the main Sinatra file and use it in a view.
- Use a layout view file to set a common theme for all your views.
- Explain what yield does in regards to a layout views.
- Override a default layout with a specific layout.


### Sinatra Templates
- What is a template?
  - A template in Sinatra is simply a file which contains the HTML we want to display.
  - This file is kept separately from the main program file in order to achieve a level of separation of concerns.
  - Templates can also accept a variety of data from the main program file and display different information based on what they receive.

### ERB - Embedded Ruby
- ERB is part of the Ruby standard library. You do not need to install any other software to use it.
- ERB is a feature of Ruby that enables you to conveniently generate any kind of text, in any quantity, from templates.
- The templates themselves combine HTML with Ruby code for variable substitution and flow control, which makes them easy to write and maintain.

### ERB Format
- `<% %>`
  - Anything inside of these tags is evaluated as Ruby code.
- `<%= %>`
  - This is a shortcut for `puts` in ERB, it will evaluated the Ruby code and plug the value into the HTML to be displayed.
- Example:
```erb
<ul>
<% @books.each do |book| %>
<li> <%= book.title %> </li>
<% end %>
</ul>
```

### Sinatra & Convention over Configuration
- Da Rules:
  - Sinatra will allow you to render a template super easily if you follow the proper convention.
  - This convention includes storing your template files in a directory called 'views'
  - ![](http://i.imgur.com/5vTw6uw.png)

### Sending Variables to the View
```rb
get '/contacts' do
  @contacts = { 'Adam' => "(202) 867-5309",
  'Jesse' => "(123) 456-7890",
  "Robin" => "(513) 174-0410"
  }
  erb :contacts
end
```
```rb
  <ul>
  <% @contacts.each do |key, val| %>
      <li>Name: <%= key %> </li>
      <li>Phone Number: <%= val %> </li>
  <% end %>
  </ul>
```
- We can also get information from our URLs and send that information on to the view.
```rb
get '/:id' do
  @foo = Foo.find(params['id'])
  erb: foo
end
```
  - The `:id` represents information carried in the URL and accessible through the `params` object.
  - We use this `:id` to talk to our database on the backend and get back an ActiveRecord object.

### The Layout View
- Many, if not most, websites tend to have a common visual theme.
  - In order to accomplish this on our Sinatra applications we will use a Sinatra convention called the layout view.
  - By creating a `layout.erb` file in our views directory we tell Sinatra we want this structure used across all of our views.
    - This is useful for having a common header/footer/navigation on every view in our app without having to add that code into each of our view folders.
- The problem is in figuring out how our layout knows which different view to render.
  - Without the proper structure and keyword, all our routes will render the layout.

```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <div id='header'>
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About Me</li>
        </ul>
      </nav>
    </div>
    <div id='main'>
      <%= yield %>
    </div>
  </body>
</html>
```
- The important part is this chunk:
```erb
<%= yield %>
```

### Yield
- the `yield` keyword tells Sinatra, that at this point in the document we should render the view that was specified in the main application file.

- So, when we say:
```rb
get '/:id' do
  @foo = Foo.find(params['id'])
  erb: foo
end
```
  - Sinatra will render the `layout.erb`, then when it sees the `<%= yield %>` keyword it will fill in the contents of the `foo.erb` view file within the `layout.erb` template.

### Overriding a Default Layout
- What if you wanted to override the default layout with a different layout for certain requests?
- Let's say you have a handler for a GET request to '/printview' that shows the page in a printable format. And let's say the only difference in this printable format from the regular page is that there's no header.  So you just need to display this print formatted page using a different layout, one that doesn't have a header.  Well, all you have to do is just pass in an extra hash that specifies the layout to use, like this:
```rb
get '/printview' do
  erb :view, :layout => :layout_print
end
```
  - The `:layout => :layout_print` hash that's passed in as the 2nd argument, basically tells ERB to use `layout_print.erb` instead as the layout template.

### One more thang.
- So, we have seen how Sinatra expects us to follow convention when placing out view files in a specific folder that Sinatra knows to look for.
- Similarly, when we have other files we want to include we should store them in a folder called `public`.
  - The `public` folder is used to store things like images, CSS files, etc...

### Resources
- [Sinatra Docs](http://www.sinatrarb.com/)
- [Rails Girls Guide - Sinatra](http://guides.railsgirls.com/sinatra-app/)
- [Sinatra on GITTR Blog by Chris Schneider](http://gittr.com/?cat=8)

### Gif
![](http://31.media.tumblr.com/tumblr_m0xqbhgkdl1qzy0a8o1_500.gif)
