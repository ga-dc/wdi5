# Caching

## Learning Objectives

* Explain what server-side caching is, and why we might use it.
* Explain what cache invalidation is, and common techniques for performing it.
* Use Rails' cache helper to implement server-side caching in a rails app.
* List and explain the challenges / pitfalls of server-side caching.

## Outline

### Write-Pair-Share: Caching Review (10 mins)

* What is caching?
* Where have we seen caching before?
* What were the benefits?
* What process had to be in place to handle changes to cached data?
* How did that caching work?
* What did we call the thing that made file names unique?

### Writing a custom caching method

Before we dive too deep into rails caching, I want to make sure we understand
caching really well, so let's write our own method, which caches an arbitrary
calculation for us.

** I do ** (15 minutes)

Show them how to build the method below.

```ruby
# takes a key and a block
# the first time it encounters a key, it runs the block and stores the result
# subsequent times it returns the stored result without running the block

$cache_store = {}
def cache(obj)
  key = obj
  return $cache_store[key] if $cache_store[key]
  $cache_store[key] = yield
end

cache "my name" do
  sleep 3
  "adam bray"
end

cache "my name" do
  sleep 3
  "adam bray"
end
```

** We do ** (30 minutes)
Let's modify this so that we don't have to give it a string, we can give it an
object instead. Why?

Given a simple class Car, wouldn't it be great if I could do something like this?

```ruby
class Car
  attr_reader :name, :hp

  def initialize(name, hp)
    @name = name
    @hp = hp
  end

  def calculate_gigawatts
    sleep 2 #simulate long calculation
    return (hp % 6) * 314159
  end

  def info
    "#{name} has #{calculate_gigawatts} gigawatts"
  end

end


car1 = Car.new("Delorian", 9001)
car2 = Car.new("Camry", 30)

cache car1 do
  car1.calculate_gigawatts
end

cache car2 do
  car2.calculate_gigawatts
end

cache car1 do
  car1.calculate_gigawatts
end
```

This works, but it's not ideal, because now our cache method is storing a
reference to the car objects, meaning they won't be garbage collected. Instead,
we could use the object_id if the cache_key is not a string:

```ruby
$cache_store = {}
def cache(obj)
  key = obj.object_id unless obj.is_a? String
  return $cache_store[key] if $cache_store[key]
  $cache_store[key] = yield
end
```

One more refinement, what if the car has been changed? Let's rewrite our method
to detect it the car has changed. Let's pretend our car has timestamps,
updated_at and created_at.


```ruby
class Car
  attr_reader :name, :hp, :updated_at

  def initialize(name, hp)
    @name = name
    @hp = hp
    @updated_at = Time.now
  end

  def name=(new_name)
    @name = new_name
    @updated_at = Time.now
  end

  def hp=(new_hp)
    @hp = new_hp
    @updated_at = Time.now
  end

  def calculate_gigawatts
    sleep 2 #simulate long calculation
    return (@hp % 6) * 3.14159
  end

  def info
    "#{name} has #{calculate_gigawatts} gigawatts"
  end

end

$cache_store = {}
def cache(obj)
  key = obj.object_id unless obj.is_a? String
  begin
    timestamp = obj.updated_at
    key = key.to_s + timestamp.to_s
  rescue
  end
  return $cache_store[key] if $cache_store[key]
  $cache_store[key] = yield
end

lambo = Car.new("Gallardo", 500)

cache lambo do
  lambo.calculate_gigawatts
end

cache lambo do
  lambo.calculate_gigawatts
end

lambo.hp = 501 # this should invalidate the cache!

cache lambo do
  lambo.calculate_gigawatts
end

cache lambo do
  lambo.calculate_gigawatts
end
```

### Server-Side Caching

#### Think-Pair-Share: How might we use caching on the server-side? (10 minutes)

So far, we've only used caching on the client side, to prevent re-downloading of
assets.

Think about what the most 'costly' computations are for the server, and how we
might cache them.

#### Fragment (View) Caching (20 minutes)

Rails has built in functionality for caching all or part of a view. This is done
using a method called `cache`, which works much like our own method.

Most commonly, we use it to cache a view partial for a model object.


Reading:
[DHH's Intro to key-based cache expiration](https://signalvnoise.com/posts/3113-how-key-based-cache-expiration-works)
[RailsGuide on Caching](http://guides.rubyonrails.org/caching_with_rails.html)

#### Exercise: Use Caching to Speed Up App (30 minutes)

Demo the blog app. Note the slowness of loading posts and comments.

Your job: use caching to speed up the page load times. You may not delete any
code (i.e. the `sleep` statements). You may only add code.

### Wrap-up

Have student present solution to exercise.

Does it work for posts & comments?
