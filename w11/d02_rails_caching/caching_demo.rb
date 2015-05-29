def get_my_name
  sleep 3
  return "adam bray"
end

# puts get_my_name
# puts get_my_name

#
# cache "getting my name" do
#   get_my_name
# end

$cache_store = {}
def cache(obj)
  key = obj
  key = obj.object_id  unless obj.is_a? String
  begin
    timestamp = obj.updated_at
    key = key.to_s + timestamp.to_s
  rescue
  end

  return $cache_store[key] if $cache_store[key]
  $cache_store[key] = yield
end

class Car
  attr_reader :name, :hp, :updated_at

  def initialize(name, hp)
    @name = name
    @hp = hp
    @updated_at = Time.now
  end

  def hp=(new_hp)
    @hp = new_hp
    @updated_at = Time.now
  end

  def calculate_gigawatts
    sleep 2 #simulate long calculation
    return (hp % 6) * 314159
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
