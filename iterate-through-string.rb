(0...the_string.length).each do |i|
   char = the_string[i]

    # Do stuff...if/else statements, etc.
end


#####

current_word_start_index = 0

for i in 0..message.length
  if (message[i] == ' ') || (i == message.length)

      # Do something, like this:
    reverse_characters(message, current_word_start_index, i - 1)

    current_word_start_index = i + 1
  end
end
