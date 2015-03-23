class TimeTraveler < Car
  def initialize color, max_speed
    super 
    @can_time_travel = true
  end
  def visit_past
    puts "the year is 1900"
  end
  def drive speed
    super
    puts "a blazing trail of fire was left behind"
  end
end

