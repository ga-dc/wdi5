#	Methods

#	Objectives

-	Explicit vs implicit returns

-	Variable scope
	-	Internal vs external

-	Passing arguments

---

-	Methods are **machines**

	-	Put something in, something goes out

-	Today's example: Quiznos sandwich toaster

---

##	Intro machine

1.	You turn on the machine
-	It returns a toasted BLT
-	The machine turns off

```
def toaster
	return "BLT(Toasty!)"
end

my_lunch = toaster

puts my_lunch
```

-	The only thing this will ever do is return a toasted BLT
	-	We need to put some kind of container in the machine that can hold any kind of sandwich, like a tray
	-	The kind of sandwich in the tray will **vary**, so we'll call the tray a **variable**

---

##	Needs variable

1.	You turn on the machine
-	It puts a toasted BLT on a tray
-	It returns the tray
-	The machine turns off

```
def toaster
	tray = "BLT(Toasty!)"
	return tray
end

my_lunch = toaster

puts my_lunch
```

-	Currently, the machine is magic. Not only is it spontaneously generating a sandwich, it's spontaneously generating a TOASTED sandwich

	-	Need to apply heat somehow

---

##	Needs to do something with variable

1.	You turn on the machine
-	It puts a BLT on a tray
-	It adds toastiness to the tray
-	It returns the tray
-	The machine turns off

```
def toaster
	tray = "BLT"
	tray = tray + "(Toasty!)"
	return tray
end

my_lunch = toaster

puts my_lunch
```

-	What's the problem with this machine?

	-	It'll still only ever return a BLT unless we monkey around in the guts inside the machine.

	-	We want it to just toast whatever we give it.

---

##	Needs an argument to populate variable

1.	You turn on the machine
-	You put a sandwich on the tray
-	It adds toastiness to the tray
-	It returns the tray
-	The machine turns off

```
def toaster(tray)
	tray = tray + "(Toasty!)"
	return tray
end

my_lunch = toaster("turkey_sub")

puts my_lunch
```

####Incorrect argument
```
def toaster("turkey_sub")
	tray = tray + "(Toasty!)"
	return tray
end
```
-	**WHY CAN'T I DO THIS?**
	-	Because I'm not referencing "turkey_sub" inside the method. I need a variable to hold it.

####Variable scope
```
def toaster(tray)
	tray = tray + "(Toasty!)"
	return tray
end

my_lunch = toaster("turkey_sub")

puts tray
```

-	What happens if I do this?
	-	The tray is only INSIDE the machine.

---

##	Using variable as argument

1.	If it's Monday, my sandwich is a BLT. Otherwise, it's a turkey sub.
-	You turn on the machine
-	You put the sandwich on the tray
-	It adds toastiness to the tray
-	It returns the tray
-	The machine turns off

```
def toaster(tray)
	tray = tray + "(Toasty!)"
	return tray
end

if(today == "Monday")
	sandwich = "BLT"
else
	sandwich = "turkey_sub"
end

my_lunch = toaster(sandwich)

puts my_lunch
```

####Variable doesn't exist yet

```
def toaster(tray)
	tray = tray + "(Toasty!)"
	return tray
end

my_lunch = toaster(sandwich)

if(today == "Monday")
	sandwich = "BLT"
else
	sandwich = "turkey_sub"
end

puts my_lunch
```
-	**Why won't this work?**
	-	Variable doesn't exist yet.

---

##	Multiple arguments

```
sandwich = "BLT"
toastiness = "(Really toasty!)"

def toaster(tray, dial_setting)
	tray = tray + dial_setting
	return tray
end

my_lunch = toaster(sandwich, toastiness)

puts my_lunch
```

---

##	Variable scope

```
if(today == "Monday")
	sandwich = "BLT"
else
	sandwich = "turkey_sub"
end

def toaster()
	tray = sandwich
	tray = tray + "(Toasty!)"
	return tray
end

my_lunch = toaster()

puts my_lunch
```

-	**WHY DOESN'T THIS WORK?**
	-	Methods can't access variables outside themselves unless they're passed to the method as arguments
	-	It only works **ONE DIRECTION**
		-	The machine can't get `sandwich` without me placing the sandwich on the tray
		-	...nor can I get `tray` from inside the machine

---

##	Returns break methods

1.	You turn on the machine
-	You put *something* on the tray
-	If the machine detects the tray does **NOT** contain a sandwich, it returns the tray. Otherwise...
-	It adds toastiness to the tray
-	It returns the tray
-	The machine turns off

```
def toaster(tray)
	if(tray == "BLT" || tray == "turkey_sub")
		tray = tray + "(Toasty!)"
		return tray
	else
		return tray
	end
end

my_lunch = toaster("BLT")

puts my_lunch
```

####Implicit else
```
def toaster(tray)
	if(tray == "BLT" || tray == "turkey_sub")
		tray = tray + "(Toasty!)"
		return tray
	end

	puts "#{tray} ain't no sammich!"
	return tray
end

my_lunch = toaster("BLT")

puts my_lunch
```
-	Why does this work?

---

##	Implicit & explicit return

```
def toaster(tray)
	tray = tray + "(Toasty!)"
	tray
end

my_lunch = toaster("BLT")

puts my_lunch
```

1.	You turn on the machine
-	You put *something* on the tray
-	If the machine detects the tray does **NOT** contain a sandwich, it returns the tray. Otherwise...
-	It adds toastiness to the tray
-	The tray gets to the end of the machine, tips over, and drops the sandwich on the floor
-	The machine turns off

####Implicit returns don't break methods

```
def toaster(tray)
	if(tray == "BLT" || tray == "turkey_sub")
		tray = tray + "(Toasty!)"
		tray
	end

	puts "#{tray} ain't no sammich!"
	return tray
end

my_lunch = toaster("BLT")

puts my_lunch
```
-	Why did it say a BLT isn't a sandwich?

---

##	Nested methods

```
def toaster(tray)

	def test_for_sandwich(substance)
		if(substance == "BLT" || substance == "turkey_sub")
			return substance + "(Toasty!)"
		else
			return "That ain't no sammich!"
		end
	end

	contents = tray

	return test_for_sandwich(contents)

end

puts toaster("BLT")
```

-	To put some of this in English: the method "explode" returns "BOOM!" if its argument equals "metal"

---

##	It's exercisin' time!

https://github.com/ga-students/addbass/blob/master/w01/d05_methods/exercise_methods.rb
