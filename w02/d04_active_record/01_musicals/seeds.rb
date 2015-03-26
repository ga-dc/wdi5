require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => "postgresql",
  :host => "localhost",
  :database => "musicals"
)

class Musical < ActiveRecord::Base
end

Musical.create([
  {title: "Cats", year: 1989, composer: "Toby Schaeffer", lyricist: "Chuck Schaeffer"},
  {title: "Shpadoinkle", year: 2015, composer: "Trey Parker and Rich Sanders", lyricist: "Trey Parker"},
  {title: "highschool the musical", year: 1932, composer:"hans zimmer", lyricist: "ja rule"}
])




