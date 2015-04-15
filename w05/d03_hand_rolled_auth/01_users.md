# User setup

## 1. Create a users table

```
rails g migration CreateUser name:string email:string password_digest:string remember_token:string admin:boolean
```

Go into the migration file and use `add_index` to add lookup indicies for the "email" and "remember_token" fields. A database index will improve the performance of finding records using non-id values.


```
class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :remember_token
      t.boolean :admin, default: false
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :remember_token
  end
end
```

## 2. Create a User model with crypto helpers

To use Rails' secure password features, we'll need to install the "bcrypt" gem. Go into your Gemfile and add:

```
# For ActiveModel has_secure_password
gem 'bcrypt'
```

Now create a model for User ("models/user.rb"). The first thing we'll add are class methods for creating and hashing remember-tokens.

```
class User < ActiveRecord::Base

  # Create a new remember token for a user:
  def User.new_remember_token
    SecureRandom.urlsafe_base64
  end

  # Hash a token:
  def User.hash(token)
    Digest::SHA1.hexdigest(token.to_s)
  end

end
```

### Try it:

Have a look at what these methods do within the Rails console.

* Our `new_remember_token` method will generate a new randomized token each time it is called.

* Our `hash` method will transform plain text into a hashed digest. A discrete plain text phrase will *always* hash into the same digest. However, even small modifications to the plain text phrase will result a completely different hash. This makes hashing useful as a "fingerprint" for data.

```
rails c
User.new_remember_token
=> "Xyg5QXnFW0mVvRxo19eWMQ"

User.hash("Hello World")
=> "0a4d55a8d778e5022fab701977c5d840bbc486d0"

User.hash("Hello World.")
=> "b701146cf2c1262a6385c8b1fb1db98f05820499"
```

## 3. Add User model behaviors

#### Validation
Next, let's add basic validations for the user.  Put this ABOVE the User class methods. Specifically, we'll validate the user's name, the formatting of their email address (don't worry about understanding that email regex!), and the length of their password...

```
class User < ActiveRecord::Base
  # Validate name:
  validates :name,
    presence: true,
    length: { maximum: 50 }

  # Validate email address:
  validates :email,
    presence: true,
    uniqueness: { case_sensitive: false },
    format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }

  # Validate password length:
  validates :password,
    length: { minimum: 8 }

  # Secure password features:
  has_secure_password

  # Create a new remember token for a user:
  def User.new_remember_token
    SecureRandom.urlsafe_base64
  end

  # Hash a token:
  def User.hash(token)
    Digest::SHA1.hexdigest(token.to_s)
  end
end
```

### has_secure_password

Note the `has_secure_password` line. That little dandy opens up a whole can 'o Rails voodoo on this model. Have a look:

**[has_secure_password](http://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html)**

In summary, our model gets several neat tricks:

- Adds `password` and `password_confirmation` fields onto the model, and validates that they always match.

- Securely hashes and saves passwords into the `password_digest` column.

- Adds an `authenticate` method onto the User model, which accepts plain text and tests if it matches the stored password digest.

### Formatting

Lastly, we need to add a few hooks onto our model that ensure the consistency of its data.

* Before creating, we'll add a hashed remember-token to the model. This will become the user's initial login session.

* Before save, we'll normalize the user's email to all lowercase.

```
class User < ActiveRecord::Base
  # Add save handlers for formatting data
  before_create :create_remember_token
  before_save :normalize_fields

  . . .

  private

  # Creates a new session token for the user:
  def create_remember_token
    remember_token = User.hash(User.new_remember_token)
  end

  # Normalize fields for consistency:
  def normalize_fields
    self.email.downcase!
  end
end
```

## 4. User CRUD

### Routes

Next, lets create resources for User in the application routes file. We'll also create a custom route called "/signup" that points to the new user form:

```
Rails.application.routes.draw do

  resources :users
  get '/signup', to: 'users#new'

end
```

### User Controller

Now let's create a users controller with the standard seven REST handlers, along with a `user_params` method for collecting strong params:

```
class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :password,
      :password_confirmation
    )
  end
end
```

Note that our params whitelist fields called "password" and "password_confirmation", although the one corresponding field in our database was called "password_digest". The voodoo of our model's `has_secure_password` will handle mapping these two input fields into one encrypted password digest.

### User Views

Build out your CRUD views! You know what to do!

### Signup Errors

However… we're doing LOTS of validation on our model, so there's a lot that can go wrong. We'd better make sure to message these errors to the user. First, we'll need to configure the user controller's `create` action, like so:

```
 def create
   @user = User.new(user_params)
   if @user.save
     redirect_to @user
   else
     render :new
   end
 end
```

Tricky – we build a new user, attempt to save it, and then only proceed if the save was successful. Otherwise, we'll send the user back to the "new" view with this invalid data so that they can fix it.

No we just need to display error messages along with the form:

```
 <% if @user.errors.any? %>
 <b>Errors:</b>
 <ul>
   <% @user.errors.full_messages.each do |msg| %>
   <li><%= msg %></li>
   <% end %>
 </ul>
 <% end %>

 <%= form_for @user do |f| %>
   <%= f.label :name %>
   <%= f.text_field :name %>

   <%= f.label :email %>
   <%= f.text_field :email %>

   <%= f.label :password %>
   <%= f.password_field :password %>

   <%= f.label :password_confirmation, 'Confirm Password' %>
   <%= f.password_field :password_confirmation %>

   <%= f.submit 'Submit', id: 'submit' %>
 <% end %>
```
