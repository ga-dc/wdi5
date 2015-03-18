#	Collections

##	Objectives

-	Describe the differences between arrays, hashes, and ranges

-	Use Ruby methods to create collections from data, combine and modify them, and make them interact with each other

-	Build tree structures using arrays of arrays

-	Create both hashes that use strings as keys, and hashes that use symbols, and explain the difference

---

Randy and I are planning a surprise birthday party for Jesse. Not including the 3 of us, we only have room for 3 other party-goers.

We each make a list.

-	**(Make two lists of 6 students. The second list should have four names from the first.)**

	-	(That's 8 students, genius.)

###	This is an [ARRAY].

-	**(Write [ARRAY] on board)**

-	It's a *collection* -- a group of things that are somehow related.

-	In Ruby, ["it","looks","like","this"]

-	**How should Randy and I proceed to get a consensus?**

	-	(Find intersection)

		-	INTERSECT

Now we're down to 4 guests. Have to get to 3.

-	**How should Randy and I proceed to get 3 guests?**

	-	(Prioritize who we most want to go.)

		-	SORT

We've prioritized our guests (SORT).

-	**Now how do we come up with a final list of 3 people?**

	-	Remove the lower-priority ones

		-	DELETE

How do we tell it which one to delete?

-	Can't just say, "Delete [Name]" because an array can have duplicate values

-	Instead we delete according to the order. Every item in an array has a numerical **INDEX**.

	-	**0, 1, 2, 3...**

-	So to delete a person from the array, we have to say "Delete person number 4"

---

We have our list. Now we need to figure out who's bringing what.

-	What supplies would we need for a party?

-	**Create hash, assigning people to supplies.**

###	This is a {HASH}.

-	**(Write {HASH} on board)**

-	Like an array, but has a label for each item

	-	Corned beef hash is a bunch of stuff mixed together


-	Has **KEYS** and **VALUES**.

	-	**What's a "key" on a map or a diagram?**

	-	HASHROCKETS `=>` or fat arrows

-	KEYS can be either strings, integers, or symbols

	-	**Why would we probably not use integers as keys?**

	-	Keys have to be unique, like symbols

	-	JSON format

```
{
	mySymbol : "myValue"
}
{
	:mySymbol => "myValue"
}
```

```
#	This is saying, "The person bringing cups is Joe. No, actually, it's Steve."
{
	"cups" =>	"Joe",
	"cups" =>	"Steve"
}
```

---

-	**What might I do if there are multiple people bringing cups?**

	-	Make a **NESTED ARRAY**

-	**What if there's one person bringing Dixie cups, and another person bringing champagne glasses?**

	-	Here are some different attempts:

```
birthday_guests	= {
	:cups	=> [
		"Joe",
		"Steve"
	]
}

birthday_guests1 = {
	:cupsDixie	=> "Joe",
	:cupsChampagne	=> "Steve"
}

birthday_guests2 = {
	:cups	=> {
		"Dixie"	=> "Joe",
		"Champagne"	=> "Steve"
	}
}

birthday_guests3 = [
	{
		:name	=> "Joe",
		:bringing	=> "Dixie cups"
	},
	{
		:name	=> "Steve",
		:bringing	=> "Champagne cups"
	}
]

birthday_stuff = {
	:guests	=> [
		"Joe",
		"Steve"
	],
	:supplies	=> [
		"Dixie cups",
		"Cake"
	]
}
```
---

###	Quick review

-	**ARRAY : ORDERING**

-	**HASH : LABELING**

-	Which uses which brackets?

---

###	Activity

-	**(10m) Split into 4 groups and make a collection that includes for each person in the group...**

	-	First name
	-	Last name
	-	Place of birth
	-	Last thing you did full-time

-	Post it to Slack.

---

##	Activity

Figuring out all of the ways to do stuff with collections.

https://docs.google.com/spreadsheets/d/1qC_6Gnt-i1yn-TtzCLG-0Oh72KGiJ269XATvCNxeK6M/edit?pli=1#gid=0

Each table is a group, and gets a sheet. For each thing on the left-hand side of the sheet, create a "fill-in-the-blank" problem and its answer.

###	Combining collections

-	`&`
-	`|`
-	`+`
-	`-`

###	Comparing collections

-	`<=>`
-	`==`
-	`.empty?`
-	`.eql?`
-	`.include?`

###	Modifying collections

-	`<<`
-	`.push(<Object>)`
-	`.pop`
-	`.pop(<Integer>)`
-	`.delete_at(<Integer>)`
-	`.delete(<String>)`
-	`.drop(<Integer>)`
-	`.shift`
-	`.shift(<Integer>)`
-	`.unshift`
-	`.unshift(<Integer>)`
-	`.merge(<Hash>)`
-	`.gsub(<Object>, <Object>)`
-	`.sub(<Object>, <Object>)`

###	Getting stuff out of your collection

-	`.first`
-	`.first(<Integer>)`
-	`.index(<Integer>)`
-	`.reverse`
-	`.shuffle`
-	`.size`
-	`.length`
-	`.sort`
-	`.take(<Integer>)`
-	`.uniq`

---

##	The easy way

-	`<Collection>[<Key>]`

---

-	`.join` and `.split`

```
fruit = "banana".split("a")

puts fruit.join("a")

fruit = "banana".split("a")

puts fruit.gsub("a", "A")

puts fruit.join("a").gsub("a", "A")
```

---

##	Ranges


```
puts (1..100).to_a

puts ("a".."z").to_a

puts ("A".."Z").to_a
```

```
puts 10.downto(1).to_a

#Integers only!

puts ("A".."Z").to_a.reverse
```

---
