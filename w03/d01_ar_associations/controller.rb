require "active_record"
require "pry"
require_relative "models2"

ActiveRecord::Base.establish_connection(
  :adapter => "postgresql",
  :host	=> "localhost",
  :database => "blog"
)

def babys_bottom
  ActiveRecord::Base.connection.tables.each do |table|
    ActiveRecord::Base.connection.drop_table(table)
  end
end

binding.pry
