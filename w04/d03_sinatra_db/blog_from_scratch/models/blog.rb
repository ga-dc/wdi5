class Blog < ActiveRecord::Migration

  def self.connect
    ActiveRecord::Base.establish_connection(
      adapter: "postgresql",
      database: "robertthomas"
    )
  end

  def self.clear
    ActiveRecord::Base.connection.tables.each do |table|
      drop_table(table)
    end
  end

  def self.setup
    create_table :posts do |column|
      column.text :content
    end
  end

end
