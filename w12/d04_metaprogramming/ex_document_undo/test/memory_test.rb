require_relative "lib/text_edit_dynamic"

start_time = Time.now

puts "Starting Memory:"
puts `vmmap #{Process.pid} | grep Total`

doc  = TextEditor::Document.new
msg = "X"

[100, 1_000, 10_000, 100_000].each do |x|
  puts "Adding #{x} characters, 1 at a time"

  x.times do
    doc.add_text(msg)
  end

  puts "Current memory footprint:"
  puts `vmmap #{Process.pid} | grep Total`
end


puts "Took #{Time.now - start_time}s to run"
