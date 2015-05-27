require 'buzzfeed_title_generator'

def students
  return %w(Alif Allyson Biboy Brad Chad Jared John Julia Karen Keith Lindsey Matt Nabil Nick Noah Parmeet Phillip Preston Rodger Sarah Tyler Zachary Aaron Adrian Ali Ammie Brittany Damon Diana Don Eltahir Enoch Gwen Haleigh Isatu Janice Jocelyn Kevin Michael Nicholas Ryan Tamara Toby)
end

Post.destroy_all
Comment.destroy_all

authors = students + %w(Adam Matt Jesse Andy Jeff Robin)
titles = Array.new(50) { BuzzfeedTitleGenerator.make_title }
posts = Array.new(50) { Faker::Lorem.paragraphs([3,4,5].sample).join("\n") }
sentences = Array.new(50) { Faker::Lorem.paragraph([3,4,5].sample)}

50.times do
  current_post = Post.create!(author_name: authors.sample, title: titles.sample, content: posts.sample)
  rand(3..50).times do
    current_post.comments.create!(author_name: authors.sample, content: sentences.sample)
  end
end
