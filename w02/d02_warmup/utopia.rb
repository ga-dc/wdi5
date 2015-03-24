require 'pry'
class Utopia
  def initialize(name)
    @name = name
  end

  def name
    @name
  end

  def name
    @name
  end

  def self.define
    puts "I am the bodiless notion of a near-perfect society."
    return self
  end

  def define
    puts "I am #{name}, a tangible society that you can reach out and touch in which everyone is content."
    return self
  end

  def say_hello
    self.define
  end

  def say_hello_again
    define
  end
end
# binding.pry # uncomment this line to add a breakpoint

Utopia.define
# => calls the class method, self.define

madison = Utopia.new("Cheese City")
madison.define
# => calls the instance method, define

madison.say_hello
# => calls the instance method, say_hello, then that method
# calls the instance method define, because `self` here is an
# instance

madison.say_hello_again
# => calls the instance method, define

Utopia.define
# => calls the class method, self.define

Utopia.say_hello
# => Error, no class method self.say_hello

Utopia.say_hello_again
# => Error, no class method self.say_hello_again