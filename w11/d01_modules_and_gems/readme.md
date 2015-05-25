# Modules and Gems

## Learning Objectives

- Explain the difference between a class and a module
- Use mixins to reuse instance methods
- Diagram the structure of a Ruby gem
- Explain what a Gemspec is and why we use it
- Create your own Ruby gem
- Publish your Ruby gem to rubygems.org
- Comment your code with RDoc
- Fork an existing gem and make local modifications

## Modules

>A Module is a collection of methods and constants. The methods in a module may be instance methods or module methods. Instance methods appear as methods in a class when the module is included, module methods do not. 

```rb
module WDI
  class Student
    def rest
      puts "zzzzzz.."
    end
  end
end

s = WDI::Student.new
s.rest
```

### Modules vs. Classes

Classical inheritance depends on hierarchical relationships.

Imagine a hierarchy like:

```
    Animal
    /    \ 
 Fish   Mammal
        /   \
      Dog   Cat
```

Where would you put a `swim` method?

## Mixins

One can `include` functionality (methods, classes, constants) from
another module by `include`ing the module.

```rb
module Swimmable
  def swim
    puts "splash! splash!" 
  end
end

def Animal
  def eat
    puts "nom nom"
  end
end

def Dog < Animal
  include Swimmable
end

def Cat < Animal

end

Dog.new.swim
Cat.new.swim
```

## Break

## Ruby Gems

>RubyGems.org is the Ruby community’s gem hosting service. 

### Anatomy of a Ruby Gem

```
$ tree freewill
freewill/
├── bin/
│   └── freewill
├── lib/
│   └── freewill.rb
├── test/
│   └── test_freewill.rb
├── README
├── Rakefile
└── freewill.gemspec
```

### Sample Gemspec

```
$ cat freewill.gemspec
Gem::Specification.new do |s|
  s.name        = 'freewill'
  s.version     = '1.0.0'
  s.summary     = "Freewill!"
  s.description = "I will choose Freewill!"
  s.authors     = ["Nick Quaranto"]
  s.email       = 'nick@quaran.to'
  s.homepage    = 'http://example.com/freewill'
  s.files       = ["lib/freewill.rb", ...]
end
```

### We do: Create a ruby gem!