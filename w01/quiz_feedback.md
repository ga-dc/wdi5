#	W01D05 Quiz, Clearing things up

##	Implicit returns vs side effects

An implicit returned is what is returned by a method that **does not** have a `return` statement. Remember: **everything** in Ruby returns *something*, and a method will return the **last thing** that was retured *inside* the method, *unless* the method has a `return` statement.

A side effect is something that takes place **outside** of a method as a result of that method being executed, but is **not** explicitly returned by the method, nor necessarily implicitly returned.

For example:

```
def toaster(tray)
	tray = tray + "Toasty!"
	puts "It's hot in here!"
	return tray
end

puts toaster("BLT")

#	Returns:
#	It's hot in here!
#	BLTToasty!
```

`It's hot in here!` being printed out is a side effect.

```
def toaster(tray)
	puts "It's hot in here!"
	tray = tray + "Toasty!"
end

puts toaster("BLT")

#	Returns:
#	It's hot in here!
#	BLTToasty!
```

`It's hot in here!` being printed out is *still* a side effect. `BLTToasty!` is printed out even though there's no `return` statement because it's **implicitly** returned.

`tray = tray + "Toasty!"` returned `"BLTToasty!"`. This was the last thing returned *inside* the method. Since there's no `return` method explicitly telling the method to return something else, the method returns `"BLTToasty"`.

---

##	Forks vs branches

Forking a repository makes a copy of it that *you* exclusively own. It's as if you had made the repository yourself, from scratch. You can do anything you want to your fork and it will have no impact on the repository from which it originall y came, nor any of the people contributing to that original repository. You can't be stopped from forking repositories.

Making a branch within a repository makes a copy of it that is owned by whoever owns the whole repository. You are still subject to their rules. The changes you make to your branch affect what is seen by everyone else contributing to that repository. The repository's owner can choose to accept or reject your changes.

For example:

The US Bureau of Engraving and Printing makes the nation's money. They want to make some tweaks to the molds they use to stamp coins, and have hired you as a designer. You make a copy of the mold, and make some changes to your copy. If the Bureau likes your changes, they'll swap out the existing mold with your new one. This is like making a **branch**.

Unfortunately, the Bureau doesn't like your changes, and rejects them. You really like your design, though, and so decide to copy the blueprints they used to design the bureau, its factories, and machines, and create your own Bureau, using your mold. This is like making a **fork**.

---

##	Variable scope

A method does not have access to variables *outside* the method. Something outside a method does not have access to variables *inside* it. The only way you can pass variables into a method is by explicitly passing it arguments, and the only way you can get variables out of a method is by that method returning those variables.

In the same way, you can't put a sandwich into a Quizno's toaster if there isn't a hatch you can stick your hand into so you can put the sandwich on the tray on the conveyer belt.

You can't get a sandwich *out* of a Quizno's toaster if there isn't a hatch on the other end through which the sandwich can exit once it's been toasted.

---

##	Truthy vs true vs falsy vs false


