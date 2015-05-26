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

## You do: think pair share

Can you think of an example hierarchical relationship
and a module to share functionality?

## Break

## Ruby Gems

>RubyGems.org is the Ruby community’s gem hosting service. 

### Gems worth mentioning:

- [Rails](https://github.com/rails/rails)
- [Sass](https://github.com/sass/sass)
- [Jekyll](https://github.com/jekyll/jekyll)
- [Pry](https://github.com/pry/pry)
- [Figaro](https://github.com/laserlemon/figaro)

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

Versions correspond to semver. Once a version is pushed, it cannot
be edited! 

### We do: Create a ruby gem!

Let’s build a simple ruby gem that tells us the weather
given a zip code.

1. Create a gemspec
2. Build out the folder structure
3. `gem build ./*.gemspec`
4. `gem install ./*.gem`

`gem build` will complain about missing required specifications.

**Question**: How do we know this worked?

**Answer**: Use `pry` to require the file and test out the methods
functionality.

### You do: Create a Ruby Gem!

Create a ruby gem that does something interesting!

- Easy
  - print hello to the console
- Medium
  - get information from a 3rd party public REST API (GitHub, Giphy, etc.)
- Hard
  - Uploads a file to s3, or DropBox

**Hints**:

- Start small

### We do: Ruby Gems with Executables

Including a ruby gem from another Ruby program is useful,
but think about some of the more popular gems like Figaro and Pry.

They have executables that may be called from the command line:

   $ figaro install
   $ pry

>Adding an executable to a gem is a simple process. You just need to place the file in your gem’s bin directory, and then add it to the list of executables in the gemspec.

```rb
s.executables << "name of exe."
```
    $ mkdir bin/

Create a file without a ruby extension in the `bin/` folder. At the top of this file,
add `#!/usr/bin/env ruby`. This is a shebang!

Within this file require your gem, and do necessary setup or parse command line options

### You do: Create an Executable for your Ruby Gem

### We do: Upload our gem to rubygems.org

Visit https://rubygems.org/users/new and create a new account.

    $ gem push *.gem

