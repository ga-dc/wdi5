User.destroy_all
Article.destroy_all

admin = User.create!(
  username: 'admin',
  password: 'admin',
  password_confirmation: 'admin',
  admin: true
)

user1 = User.create!(
  username: 'user1',
  password: 'user1',
  password_confirmation: 'user1',
  admin: false
)

user2 = User.create!(
  username: 'user2',
  password: 'user2',
  password_confirmation: 'user2',
  admin: false
)

user3 = User.create!(
  username: 'user3',
  password: 'user3',
  password_confirmation: 'user3',
  admin: false
)

Article.create!(
  title: 'First post',
  content: 'Hey guys. This is going to be quite awesome, do you not you think?',
  user: user1
)

Article.create!(
  title: 'Second post',
  content: 'OMG there are now two posts on the page!!',
  user: user2
)

Article.create!(
  title: 'Third post',
  content: 'I am writing this post to render the previous post invalid. Boom.',
  user: user3
)
