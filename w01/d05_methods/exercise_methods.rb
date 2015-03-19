#	A bunch of methods are defined below.
#	Each is followed by a call to another method called "assert_true".
#	assert_true checks to see if the return value of the defined method, when given certain arguments, is equal to some other value. 	
#	YOUR MISSION, SHOULD YOU CHOOSE TO ACCEPT IT (hint: you do), is to change the code inside the defined methods so that each assert_true puts "pass".
#	When you're done, you should be able to execute this script ("ruby exercise.rb") and it'll just puts "pass" 6 times.

def assert_true(input)
	if input
		puts "pass"
	else
		puts "fail"
	end
end


##(1)##

def add(number_one, number_two)

#	Put some code in here!

end

assert_true( add(7,4) == 11 )


##(2)##

def subtract(number_one, number_two)

#	Put some code in here!

end

assert_true( subtract(7,4) == 3)


##(3)##

def make_all_caps(text)

#	Put some code in here!

end

assert_true( make_all_caps("i literally cant even") == "I LITERALLY CANT EVEN" )


##(4)##

def reverse(text)

#	Put some code in here!

end

assert_true( reverse("straw") == "warts" )


##(5)##

def joltiply(integer_one, integer_two)

#	Put some code in here!

end

assert_true( joltiply(11,3) == 30 )
assert_true( joltiply(7,2) == 19 )
assert_true( joltiply(6,4) == 14 )
assert_true( joltiply(3,1) == 8 )


##(6)##

def surround_with_curly_brackets(text)

#	Put some code in here!

end

assert_true( surround_with_curly_brackets("I'm surrounded by handlebar mustaches") == "{I'm surrounded by handlebar mustaches}" )
