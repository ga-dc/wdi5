# ActiveRecord Validations

### Objectives
- Explain what AR validations are and why they are important.
- Compare and contrast various methods of data validation.
- Identify the different times validations are run.
- Identify what AR methods trigger validation and which don't.
- Identify different validation helpers and the situations you'de use them.
- Write and use custom validation methods.
- Explain how to access the AR errors object and why it is useful.
- Discuss at a high level what callbacks are and when they are used.

#### What are validations?
- Validations allow you to ensure that only valid data is stored in your database.- Callbacks and observers allow you to trigger logic before or after an alteration of an object’s state.

#### Types of Validation
- Database constraints
  - NOT NULL, UNIQUE, INTERGER, etc...
- Client-side validations (JS)
  - Useful, but generally unrelyable when used alone.
  - Can be a convenient way to provide users with immediate feedback as they use your site
- Controller-level
  - Rails specific
  - Become unwieldy and difficult to test and maintain.
- Model-level
  - Best way to ensure that only valid data is saved into your database.
  - They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain.

#### When Does Validation Happen?
- There are 2 types of ActiveRecord objects.
  - Those that correspond to a row in the database and those that do not
- When you make a new object (i.e. using the .new method), that object is created but doe not belong to the database yet.
- Using the .save method will then add the object tothe database.
  - Sends the SQL INSERT operation to the database
  - Using the .update method sends the SQL UPDATE operation.
- Validations are typically run before these commands are sent to the database.
  - If any validations fail, the object will be marked as invalid and Active Record will not perform the INSERT or UPDATE operation.
  - This helps to avoid storing an invalid object in the database.
- You can choose to have specific validations run when an object is created, saved, or updated.

#### __Note__
- There are many ways to change the state of an object in the database. Some methods will trigger validations, but some will not. This means that it’s possible to save an object in the database in an invalid state if you aren’t careful.
- The following methods trigger AR validations and will not save the object to the database if it is not valid.
  - create
  - create!
  - save
  - save!
  - update
  - update_attributes
  - update_attributes!

- The following methods skip validations, and will save the object to the database regardless of its validity. They should be used with caution.
  - decrement!
  - decrement_counter
  - increment!
  - increment_counter
  - toggle!
  - touch
  - update_all
  - update_attribute
  - update_column
  - update_counters

#### Valid & Invalid
- .valid?
  - To verify whether or not an object is valid, we can use the valid? method.
  - Triggers your validations and returns true if no errors were found in the object, and false otherwise.
```rb
class Person < ActiveRecord::Base
  validates :name, :presence => true
end

Person.create(:name => "John Doe").valid? # => true
Person.create(:name => nil).valid? # => false
```
- After Active Record has performed validations, any errors found can be accessed through the errors instance method, which returns a collection of errors.
- By definition, an object is valid if this collection is empty after running validations.

- __Note__ that an object instantiated with .new will not report errors even if it’s technically invalid, because validations are not run when using new.

- .invalid?
  - Simply the inverse of valid?. invalid? triggers your validations, returning true if any errors were found in the object, and false otherwise.

#### Validation Errors
- Calling the .errors method on an active record object will return on object (that behaves like an ordered hash) containing all the errors collected from validations on an active record object.
  - Each key is the attribute name (i.e. presence, length, etc...) and the value is an array of strings with error information.
```rb
class Person < ActiveRecord::Base
  validates :name, :presence => true, :length => { :minimum => 3 }
end

person = Person.new
person.valid? # => false
person.errors
 # => {:name => ["can't be blank", "is too short (minimum is 3 characters)"]}

person = Person.new(:name => "John Doe")
person.valid? # => true
person.errors # => []
```

#### Validation Helpers
- acceptance
  - Validates that a checkbox on the user interface was checked when a form was submitted.
```rb
class Person < ActiveRecord::Base
  validates :terms_of_service, :acceptance => true
end
```
- validates_associated
  - You should use this helper when your model has associations with other models and they also need to be validated
```rb
class Library < ActiveRecord::Base
  has_many :books
  validates_associated :books
end
```
- __NOTE:__ Don’t use validates_associated on both ends of your associations. They would call each other in an infinite loop.

- length
  - This helper validates the length of the attributes’ values. It provides a variety of options, so you can specify length constraints in different ways:
```rb
class Person < ActiveRecord::Base
  validates :name, :length => { :minimum => 2 }
  validates :bio, :length => { :maximum => 500 }
  validates :password, :length => { :in => 6..20 }
  validates :registration_number, :length => { :is => 6 }
end
```
- numericality
  - This helper validates that your attributes have only numeric values.
```rb
class Player < ActiveRecord::Base
  validates :points, :numericality => true
  validates :games_played, :numericality => { :only_integer => true }
end
```
- There are multiple option you can use in association with numericality.
  - grater_than / greater_than_or_equal_to
  - less_than / less_than_or_equal_to
  - equal_to
  - odd / even
- presence
  - This helper validates that the specified attributes are not empty.
```rb
class Person < ActiveRecord::Base
  validates :name, :login, :email, :presence => true
end
```
- uniqueness
  - This helper validates that the attribute’s value is unique right before the object gets saved.
    - It does not create a uniqueness constraint in the database, so it may happen that two different database connections create two records with the same value for a column that you intend to be unique.
    - To avoid that, you must create a unique index in your database.
```rb
class Account < ActiveRecord::Base
  validates :email, :uniqueness => true
end
```
- on
  - The :on option lets you specify when the validation should happen.
    - The default behavior for all the built-in validation helpers is to be run on save (both when you’re creating a new record and when you’re updating it).
    - If you want to change it, you can use :on => :create to run the validation only when a new record is created or :on => :update to run the validation only when a record is updated.
```rb
class Person < ActiveRecord::Base
  validates :email, :uniqueness => true, :on => :create
  validates :age, :numericality => true, :on => :update
  validates :name, :presence => true, :on => :save
end
```

#### Custom Validations
- When the built-in validation helpers are not enough for your needs, you can write your own validation methods as you prefer.
```rb
class Invoice < ActiveRecord::Base
  validate :expiration_date_cannot_be_in_the_past,
    :discount_cannot_be_greater_than_total_value

  def expiration_date_cannot_be_in_the_past
    if !expiration_date.blank? and expiration_date < Date.today
      errors.add(:expiration_date, "can't be in the past")
    end
  end

  def discount_cannot_be_greater_than_total_value
    if discount > total_value
      errors.add(:discount, "can't be greater than total value")
    end
  end
end
```

#### Callbacks
- Callbacks are methods that get called at certain moments of an object’s life cycle.
- With callbacks it is possible to write code that will run whenever an Active Record object is created, saved, updated, deleted, validated, or loaded from the database.
  - In order to use the available callbacks, you need to register them. You can implement the callbacks as ordinary methods and use a macro-style class method to register them as callbacks.
```rb
class User < ActiveRecord::Base
  validates :login, :email, :presence => true

  before_validation :ensure_login_has_a_value

  protected
  def ensure_login_has_a_value
    if login.nil?
      self.login = email unless email.blank?
    end
  end
end
```

### Validations and Testing
- To test or not to test.
  - Reasons not to test
    - Using well established tools often allows us to not have to worries about testing these tools as they have been throughly vetted.
  - Reason to test
    - Make sure our classes/models only accept the data that we designed them to accept
    - Use RSpec unit tests as blueprints for building out classes/models
- Example time
```rb
class Contact
  attr_accessor :firstname

  def initialize(firstname)
    @firstname = firstname
  end

validates :firstname, :presence => true
end
```

```rb
class Contact
  attr_accessor :firstname

  def initialize(firstname)
    @firstname = firstname
  end

validates_presence_of :firstname
end
```

```rb
it "is invalid without a firstname" do
  contact = Contact.new(firstname: nil)
  contact.valid?
  expect(contact.errors[:firstname]).to include("can't be blank")
end
```

```rb
it "is invalid with a duplicate email address" do
  Contact.create(
    firstname: 'Joe', lastname: 'Tester',
    email: 'tester@example.com'
  )
  contact = Contact.new(
    firstname: 'Jane', lastname: 'Tester',
    email: 'tester@example.com'
  )
  contact.valid?
  expect(contact.errors[:email]).to include("has already been taken")
end
```
