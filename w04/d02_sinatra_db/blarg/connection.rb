class DB < ActiveRecord::Migration

  def self.open
    ActiveRecord::Base.establish_connection(
      host:	"localhost",
      adapter:	"postgresql",
      database: "robertthomas"
    )
  end

  def self.clear
    tables.each do |table|
      drop_table(table)
    end
  end

  def self.setup
    create_table :posts do |column|
      column.string :content
    end
  end

end

