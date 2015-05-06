Card.destroy_all

todos = ["Wash the car",
         "Wrap things in cash",
         "Write blog post about selfies",
         "Learn about javascript events"]

completed = ["Do 20 jumping jacks",
             "See the rain coming down on a sunny day",
             "Learn about jQuery DOM manipulation"]

todos.each do |desc|
  Card.create!(description: desc, completed: false)
end

completed.each do |desc|
  Card.create!(description: desc, completed: true)
end
