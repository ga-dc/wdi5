# Learning Objectives
- Explain what TDD means, and possible advantages / disadvantages
- Explain the concept of TDD and how it relates to "Red, Green, Refactor"
- Read Rspec tests and write code to make them pass
- Set up a Ruby program with RSpec
- Set up and write RSpec tests using
  - describe
  - before
  - let
  - expect
  - to and not_to
  - eq, be
- Write assert methods that fail
- Write code to make existing tests pass

## What the heck is TDD?
- __Test-driven development (TDD) (Beck 2003; Astels 2003), is an evolutionary approach to development which combines test-first development where you write a test before you write just enough production code to fulfill that test and refactoring.__
- What is the primary goal of TDD?  
  - One view is the goal of TDD is specification and not validation (Martin, Newkirk, and Kess 2003).  
    - In other words, it’s one way to think through your requirements or design before your write your functional code (implying that TDD is both an important agile requirements and agile design technique).
  - Another view is that TDD is a programming technique.  
    - As Ron Jeffries likes to say, the goal of TDD is to write clean code that works.
- I think that there is merit in both arguments, although I lean towards the specification view, but I leave it for you to decide.

### Why test code?
- Focus on product requirements first
- Allows us to make changes and verify code integrity
- Know when to stop coding
- Writing tests helps break down larger problems into smaller ones
- Visual gratification
- Increased confidence in developers working on test-driven codebases
- Ability to refactor without fear of breaking things
- Improved maintainability and changeability of codebases
- Increased protection from defects, especially regressions
- Better code quality (in particular, less coupling and higher cohesion)
- Tests as a replacement/supplement to other forms of documentation
- Ability of tests to act as a "living specification" of expected behavior
- Earlier detection of misunderstandings/ambiguities in requirements
- Easier detection of flaws in the interactions between objects
- Reduced need for manual testing
- Faster feedback loop for discovering whether an implementation is correct Downsides:
- Fragile Tests
- More to learn
- Speed

### Why not?
- Time
- $$$
- Stakeholders

---
 ![](http://www.agiledata.org/images/tddSteps.jpg)

---

## Red-Green-Refactor
- via [James Shore](http://www.jamesshore.com/Blog/Red-Green-Refactor.html)

  1. Think: Figure out what test will best move your code towards completion. (Take as much time as you need. This is the hardest step for beginners.)

  2. Red: Write a very small amount of test code. Only a few lines... usually no more than five. Run the tests and watch the new test fail: the test bar should turn red. (This should only take about 30 seconds.)

  3. Green: Write a very small amount of production code. Again, usually no more than five lines of code. Don't worry about design purity or conceptual elegance. Sometimes you can just hardcode the answer. This is okay because you'll be refactoring in a moment. Run the tests and watch them pass: the test bar will turn green. (This should only take about 30 seconds, too.)

  4. Refactor: Now that your tests are passing, you can make changes without worrying about breaking anything. Pause for a moment. Take a deep breath if you need to. Then look at the code you've written, and ask yourself if you can improve it. Look for duplication and other "code smells." If you see something that doesn't look right, but you're not sure how to fix it, that's okay. Take a look at it again after you've gone through the cycle a few more times. (Take as much time as you need on this step.) After each little refactoring, run the tests and make sure they still pass.

  5. Repeat: Do it again. You'll repeat this cycle dozens of times in an hour. Typically, you'll run through several cycles (three to five) very quickly, then find yourself slowing down and spending more time on refactoring. Than you'll speed up again. 20-40 cycles in an hour is not unreasonable.

# RSpec

## What the heck is RSpec?
- RSpec is a testing framework for the Ruby programming language.
- Released on May 18, 2007

## What does an RSPec test look like?
``` ruby
describe User do
  context 'with admin privileges' do
    before :each do
      @admin = Admin.get(1)
    end

    it 'should exist' do
      expect(@admin).not_to be_nil
    end

    it 'should have a name' do
      expect(@admin.name).not_to be_false
    end
  end

  #...
end
```

## Getting set up
- Make sure you are in the proper directory.
- Create a file to work in called person.rb
- In the terminal:

``` sh
  rspec --init
```

## What just happened?
- We added a hidden .rspec file that puts rspec in our directory.
- We created a spec directory that will hold the files necessary for tsting with RSpec.
  - Let's look inside the spec directory.
   - spec_helper.rb

## Let's Play a bit.
- Create a file called person_spec.rb
  - Open person_spec.rb
    - require 'spec_helper'
    - require_relative '../person'
  - Write this into this person_spec.rb file.

``` ruby
describe Person do
  before :each do
    @randy = Person.new
  end
end
```

## Run RSpec
- In the terminal, in the proper directory
``` sh
rspec
```
  - What happens?

## Code
- We need to have a class called Person

``` ruby
class Person

end
```

``` sh
rspec
```

## Let's write our first test

``` ruby
describe "#new" do
  it "should create a new instance of the Person class" do
    expect(@randy).to be_an_instance_of(Person)
  end
end
```
  - What code would we need to write to satisfy this test?

``` sh
rspec
```

## Code!

``` ruby
class Person
  def initialize
  end
end
```

## More tests

``` ruby
describe "#say_hello" do
  it "should be expected to say offer a greeting" do
    expect(@randy.say_hello).to eql("Hola!")
  end
end
```
  - What code would we need to write to satisfy this test?

``` sh
rspec
```

## Code

``` ruby
class Person
  def initialize
  end

  def say_hello
    "Hola!"
  end
end
```

## More More Tests!

``` ruby
describe "#verify_sentience" do
  it "is expected to not respond negatively" do
    expect(@randy.verify_sentience).to_not be(false)
  end
end
```
  - What code would we need to write to satisfy this test?

``` sh
rspec
```

## Code!

``` ruby
class Person
  def initialize
  end

  def say_hello
    "Hola!"
  end

  def verify_sentience
    true
  end
end
```

## All the tests!

``` ruby
describe Person do
  before :each do
    @randy = Person.new
  end

  describe "#new" do
    it "should create a new instance of class Person" do
      expect(@randy).to be_an_instance_of(Person)
    end
  end #End describe #new

  describe "#say_hello" do
    it "should be expected to say say hello" do
      expect(@randy.say_hello).to eql("Hola!")
    end
  end #End describe #say_hello

  describe "#verify_sentience" do
    it "is expected to not respond negatively" do
      expect(@randy.verify_sentience).to_not be(false)
    end
  end #End describe #verify_sentience
end
```

## Mocks & Stubs
- Stubbing and Mocking makes your component examples independent of other components.
- You can stub methods on objects to let them return whatever you like.
- And you can use mock objects to replace instances of other classes.

## Example

```ruby
book = instance_double("Book", :pages => 250)

allow(book).to receive(:title) { "The RSpec Book" }

allow(book).to receive(:title).and_return("The RSpec Book")
```

## Expect an error?

``` ruby
describe ValidatingWidget do
  it "fails validation with no name (using error_on)" do
    ValidatingWidget.new.should have(1).error_on(:name)
  end

  it "fails validation with no name (using errors_on)" do
    ValidatingWidget.new.should have(1).errors_on(:name)
  end
```

## Expect an error?
``` ruby
describe Object, "#non_existent_message" do
  it "should raise" do
    expect{Object.non_existent_message}.to raise_error(NameError)
  end
end

describe Object, "#public_instance_methods" do
  it "should not raise" do
    expect{Object.public_instance_methods}.to_not raise_error(NameError)
  end
end
```

## Additional Resources

- TDD
  - http://www.agiledata.org/essays/tdd.html

- RSpec Cheatsheets:
  - https://www.anchor.com.au/wp-content/uploads/rspec_cheatsheet_attributed.pdf
  - https://gist.github.com/byplayer/965857

- Code School RSpec:
  - https://www.codeschool.com/courses/testing-with-rspec

- RSpec for Newbies:
  - http://code.tutsplus.com/tutorials/ruby-for-newbies-testing-with-rspec--net-21297

- Mocks & Stubs
  - http://rubydoc.info/gems/rspec-mocks/frames
  - http://rubydoc.info/gems/rspec-mocks/frames
