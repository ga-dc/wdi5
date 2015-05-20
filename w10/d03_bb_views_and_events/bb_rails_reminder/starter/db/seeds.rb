# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Reminder.destroy_all

reminders = Reminder.create([
    {body: "don't sweat the small stuff",           completed: false},
    {body: "study backbone views",                  completed: false},
    {body: "gym, tan, laundry (err day)",           completed: false},
    {body: "study backbone models and collections", completed: true}
  ])
