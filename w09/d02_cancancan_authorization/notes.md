# Devise

## Learning Objectives

* Utilize Cancancan to implement two-level user authorization in a Rails application
  * Define abilities
  * Detect abilities
  * Utilize Cancancan helpers (load_and_authorize_resource)

## Outline

### User stories

* As a user, I want to be able to view all articles, so I can see what's going on
* As a user, I want to be able to view a single article, so I can focus on it
* As a user, I want to be able to create new articles
* As a user, I want to be able to edit articles that I wrote
* As a user, I want to be able to delete articles that I wrote
* As an admin, I want to be able to edit all articles, so I can moderate content
* As an admin, I want to be able to delete all articles, so I get rid of offensive material

### Starting point

* Let's get cancancan set up together

```ruby
gem 'cancancan'
```

followed by

```bash
$ bundle install
```

Create `app/models/ability.rb`
```ruby
class Ability
  include CanCan::Ability

  def initialize(user)
  end
end
```

### Our first authorization

**We do**

* As a user, I want to be able to view all articles, so I can see what's going on
  * Add an `authorize!` inside the index action
  * Visit the page and encounter the error!
  * Add an ability to users to be able to read articles in `ability.rb`
  * Watch things become awesome

### Authorizationification

**You do**

* As a user, I want to be able to view a single article, so I can focus on it

**Checkpoint**

* As a user, I want to be able to create new articles
  * Add a `:create` authorization to the controller
  * Go check that access is denied!
  * Add a `:create` ability in `ability.rb`
  * Go watch it pass and feel awesome

**Checkpoint**

* Add `:update` and `:destroy` authorizations to the controller

**I do**

* Add the user-specific abilities
* Make smarter views

### Time permitting

* `load_and_authorize_resource`
  * Creation of instance variables
  * Whitelisting of parameters when relevant
