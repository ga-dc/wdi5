require_relative 'car'
require_relative 'time_traveler'

ford_focus = Car.new "silver", 125
#ford_focus.drive
p ford_focus

delorean = TimeTraveler.new "silver", 88
#delorean.visit_past
delorean.drive( 86 )
p delorean







