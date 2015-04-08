require "active_record"
require "pry"
require_relative "connection"
require_relative "../models/item"

binding.pry


Item.destroy_all
Item.create([
  { title: "Visit France", description: "Make sure the king of France is bald." },
  { title: "Own fewer than 100 things", description: "Minimalize." },
  { title: "Play a show on stage", description: "Be the rockstar you are." }
])