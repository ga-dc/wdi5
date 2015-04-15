# Sessions setup

When a user signs into a website, we want to create a new persistent session token for them. This way, when they return to our application they'll remain signed in.

We'll manage sessions the same way we would any other RESTful resource. Our sessions controller will do the following:

 * **new**: directs to the signin page.
 * **create**: creates a new session (signin).
 * **destroy**: destroys the session (signout).

However, our sessions controller will NOT have a corresponding model. We do not persist sessions within our database… we persist them in a client-side cookie. Our sessions controller will be managing cookie data rather than ActiveRecord model data.

## 1. Routing

Given that sessions will be managed as a RESTful resource, let's start by adding session resources into our routes file. Add "sessions" resources that only handles new and create, as well as a user-friendly "/signin" route, and a custom "/signout" route:

`config/routes.rb`:

```
Rails.application.routes.draw do

  resources :users
  resources :sessions, only: [:new, :create]

  get '/signup', to: 'users#new'
  get '/signin', to: 'sessions#new'
  delete '/signout', to: 'sessions#destroy'

end
```

Why make a custom route for "signout"? Well, think about the "destroy" resource that would be generated using `resources`:

`delete '/session/:id' => 'sessions#destroy`

That resource requires an ID as part of its route, which our session cookie doesn't really have (or need). Our custom destroy route will perform the action without requiring an ID.


## 2. Controller

Now that session resource routes are established, let's create a sessions controller with corresponding actions:

`app/controllers/sessions_controller.rb`:

```
class SessionsController < ApplicationController
  def new
  end

  def create
  end

  def destroy
  end
end
```

## 3. Signin Page

The signin page allows a user to submit their credentials to the session controller. If login fails, we'll need to provide feedback to the user, for which we'll use the built-in Rails flash messaging system.

### Flash message

Rails provides a simple and convenient messaging system for controllers to send notifications into a view. We call this the "flash message". We'll probably want to print out these flash messages throughout our application, so let's make the flash a view partial that can be rendered anywhere.

Create a new views directory called "common", and within it create a flash view partial...

`app/views/common/_flash.html.erb`:

```
<% flash.each do |name, msg| %>
  <%= content_tag :p, msg, class: name %>
<% end %>
```

We can now render this partial ("common/flash") into any view that needs to display the flash message.

### Signin form

We have no model to bind this form to, so instead we'll provide the form a ":session" namespace (ie: the name of the params hash that will hold our form data), and point it at the `sessions_path`:

`app/views/sessions/new.html.erb`:

```
 <h1>Sign in</h1>

 <%= render 'common/flash' %>

 <%= form_for :session, url: sessions_path do |f| %>
  <%= f.label :email %>
  <%= f.text_field :email %>

  <%= f.label :password %>
  <%= f.password_field :password %>

  <%= f.submit 'Sign in', id: 'signin' %>
 <% end %>
```

### The "create" action

Now configure the sessions controller "create" action to find a user with the provided email, and then try to log them in:

`app/controllers/sessions_controller.rb`:

```
def create
  # Find the user by email:
  user = User.find_by(email: params[:session][:email].downcase)

  # Test if the user was found AND authenticates
  if user && user.authenticate(params[:session][:password])
    # TODO: sign the user in!
  else
    flash[:error] = 'Invalid email/password'
    redirect_to new_session_path
  end
end
```

## 4. Session Helper

After a user signs in, we'll need to access their information throughout our entire application. Therefore, we'll want to break out session-management tasks into a universal helper.

### Helper module

We'll create a new sessions helper file with the following:

`app/helpers/sessions_helper.rb`:

```
module SessionsHelper
  # TODO: write me!
end
```

This is a helper *module*. Modules are packages of code that can be added into other classes. We'll add this session helper into our main application controller, which will provide its behaviors to *all other controllers* via inheritance.

Go into your application controller and include this new sessions helper module:

`app/controllers/application_controller.rb`:

```
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper
end
```

Neat. Now anything we include in that session helper will be available in any application controller!

### Current User

Let's add in some sessions helper methods for managing the current user:

`app/helpers/sessions_helper.rb`:

```
module SessionsHelper

  # Current User methods:

  def current_user
    remember_token = User.hash(cookies[:remember_token])
    @current_user ||= User.find_by(remember_token: remember_token)
  end

  def current_user=(user)
    @current_user = user
  end

  def current_user?(user)
    current_user == user
  end
end
```

These three methods give us a `current_user` getter and setter, as well as a `current_user?` comparison test.

When getting the current user, we'll grab any remember-token that exists within the cookie, and then try to find a user with a matching hashed token.

### Signin Status

Now we'll add the transactional process for actually signing users in and out. When a user signs in, we plant a new remember-token into their cookie, and then save a hashed version of that token into our database. This will allow us to recognize the user's session cookie in the future. When signing out, we'll simply break this connection.

`app/helpers/sessions_helper.rb`:

```
module SessionsHelper

  ...

  # Signin Status methods:

  def signed_in?
    !current_user.nil?
  end

  def sign_in(user)
    remember_token = User.new_remember_token
    cookies.permanent[:remember_token] = remember_token
    user.update_attribute(:remember_token, User.hash(remember_token))
    self.current_user = user
  end

  def sign_out
    current_user.update_attribute(:remember_token, User.hash(User.new_remember_token))
    cookies.delete(:remember_token)
    self.current_user = nil
  end
end
```

Why are we using `update_attribute` in the above, rather than just setting a new "remember_token" on the user and then saving it? Keep in mind that our user is only a partial model: it has no "password" or "password_confirmation" field on it (given that we don't store those fields in our database). Because those password fields are missing, our model will fail full-model validation. Using `update_attribute` will perform a *partial update*, where only the "remember_token" field will be validated and saved.

### Location Forwarding

It's quit common that we'll try to access a protected URL as a non-authenticated user, at which time we're directed to the signin page. However, after signing in, isn't it handy when the application forwards us along to the protected page that we originally requested? This location forwarding behavior can also be handled using the session.

`app/helpers/sessions_helper.rb`:

```
module SessionsHelper

  ...

  # Location Management methods:

  def store_location
    if request.get?
      session[:return_to] = request.url
    end
  end

  def redirect_back_or(default)
    redirect_to(session[:return_to] || default)
    session.delete(:return_to)
  end
end
```

These methods are designed to store a user's intended destination URL within their session, and then forward along to that URL after authentication is completed. The `redirect_back_or` method can be used in place of a normal `redirect_to` method in cases where the user was asked to sign in before completing an action.

### Security Checkpoint

Last but not least, let's add in the helper method that we'll use as a universal security checkpoint. We can use this method with any controller's `before_action` to prevent the user from accessing content without authenticating.

`app/helpers/sessions_helper.rb`:

```
module SessionsHelper

  ...

  # Security Checkpoint method:

  def require_signin
    if !signed_in?
      store_location
      flash[:notice] = "Please sign in."
      redirect_to signin_url
    end
  end
end
```

# 5. Sign in!

## Sessions controller

Lastly, we'll need to hook up our session controller with our new Sessions Helper behaviors. Fill in the missing TODO item in the sessions controller "create" action with the following:

`app/controllers/sessions_controller.rb`:

```
# Test if the user was found AND authenticates
if user && user.authenticate(params[:session][:password])
  sign_in user
  redirect_back_or root_path
else
...
```

## Users controller

Now let's require signin to access actions within the users controller. Add a `before_action` that requires signin. We can do this anywhere in our app that we want to require users to authenticate.

`app/controllers/users_controller.rb`:

```
class UsersController < ApplicationController
  before_action :require_signin
  ...
```

While in the users controller, let's also update the users "create" action to automatically signin newly-created users:

```
def create
  @user = User.new(user_params)
  if @user.save
    sign_in @user
    redirect_to @user
  else
    render :new
  end
end
```

# 6. Signout

To create a signout button, we'll need to send a DELETE request to the sessions controller. While many forums and blog posts tell you to use an anchor tag (< a >), those links actually require JavaScript to properly send a DELETE request. We'll use a good old form.

## Signout Form

The "Signout" button should be present in all views after the user signs in, so let's create another common view partial for the form.

`app/views/common/_signout.html.erb`:

```
<% if signed_in? %>
  <%= form_for :session, url: signout_path, method: 'delete' do |f| %>
    Signed in as <%= link_to current_user.name, current_user %>
    <%= f.submit 'Sign out', id: 'signout' %>
  <% end %>
<% end %>
```

For now, let's just render that partial into our main application layout so that it will be available on all pages.

`app/views/layouts/application.html.erb`:

```
...
 <body>
  <%= render 'common/signout' %>
  <%= yield %>
 </body>
</html>
```

## Signout Controller

Now we need to define our signout behavior in the sessions controller "destroy" action. Signout will simply terminate the user's session, and then redirect to the application root (or another logged-out view of your choice).

`app/controllers/sessions_controller.rb`:

```
def destroy
  sign_out
  redirect_to root_url
end
```
