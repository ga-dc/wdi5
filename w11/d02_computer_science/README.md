Computer Science
================

Learning Objectives
-------------------

- Define "algorithm"
- Identify what Big-O time-complexity measures
- Give an example of a divide-and-conquer algorithm
- Predict the time-complexity of a given algorithm
- Describe a few basic data structures by listing three traits of each
- Identify the time-complexity of search for a particular data structure

Introduction
------------

What does computer science have to do with modern web development? Not much, on the surface. As application developers, we can do our job well by following best practices, guided by our experience. There will rarely be a time when you are interested in the time-complexity of a method you write. Complexity and data structures are something **language** designers worry about, not developers, right?

Well, no. While it is true that we don't usually care much about optimization, there are a few reasons why developers should care a bit about classic topics in introductory computer science (CS). First, classic problems allow us to practice our problem solving skills; in fact, most of our lesson today can be completed without coding. Second, being familiar with the tradeoffs inherent in choosing an algorithm or a data structure have direct parallels in choices you make writing your application code. Lastly, ome of your colleagues will have CS degrees, and being able to understand the jargon and figures of speech they use will help you communicate with them. Perhaps most importantly, these colleagues will probably have a say in hiring you! Nearly every technical interview touches on these topics.

Algorithms
----------

> algorithm (n.) - a process or set of rules to be followed to attain a goal

Algorithm is a fancy word for recipe. When we have a problem, we take a series of steps to solve that problem. Say I want a peanut butter and jelly sandwich, and Robin has agreed to make it for me. The problem is, he doesn't know how. Assuming an otherwise-adult set of knowledge, how might we tell Robin to make me a sandwich?

> 1. Go to the 12th floor
> 2. Go to the kitchen
> 3. Find the bread, toaster, utensils, peanut butter, and jelly
> 4. Toast the bread
> 5. Using a knife or spoon, spread one slice of toast with peanut butter
> 6. Spread the other slice of toast with jelly
> 7. Place the two pieces of bread together
> 8. Return to me with the sandwhich

If Robin needed to make sandwiches for all of us, how would he do that? What's the "easy" or naïve way to obtain many sandwiches? What is a more effiecent way?

Exercise: Take a few minutes to describe your morning algorithm... uh, routine. Share it with a neighbor. How many steps are there? How do you save time if you're in a rush?

A well-known problem in computer science is sorting an array. There are many strategies (read: algorithms) for accomplishing this. Here is an abbreviated list:

- Bubble sort
- Quick sort
- Merge sort
- Insertion sort

This illustrates something important about algorithms: you nearly always have a choice. There is no "one way" to solve a problem, no "right" way. Different algorithms are better in different contexts, or with different constraints. It's up to you to consider the options and pick the one that best meets your needs.

Exercise: Work with a partner to read the [pseudocode](http://rosettacode.org/wiki/Sorting_algorithms/Quicksort) and [ruby](http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#Ruby) implementations of quick sort. One of you will be asked to explain quick sort in your own words.

Big-O (Asymptotic Analysis)
---------------------------

- Naive number guessing
- Divide-and-conquer number guessing
- Big-O table
- Demonstrate number guessing, diagram as flow chart
- Give an algorithm, ask students to predict Big-O
- Gotcha: worst-case, best-case, typical-case

Data Structures
---------------

- Lists (Primitive Arrays, Stacks, Queues)
- Linked Lists (bonus doubly-linked list)
- Associative Array (Hash)
- Tree
- Graph
- Research Activity
- Characterize search method for each (bonus: other methods like insertion, deletion)

Additional Resources
--------------------

- [CompSci 101 - Big-O notation - Dave Perrett](http://www.daveperrett.com/articles/2010/12/07/comp-sci-101-big-o-notation/)
- [Big-O Algorithm Complexity Cheat Sheet](http://bigocheatsheet.com/)
- [Sorting Algorithm Animations](http://www.sorting-algorithms.com/)
- [A Beginner’s Guide to Big O Notation « Rob Bell](http://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
- [Running Time Graphs](http://science.slc.edu/~jmarshall/courses/2002/spring/cs50/BigO/)
- [Sorting algorithms/Quicksort - Rosetta Code](http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#Ruby)
- [Fibonacci sequence - Rosetta Code](http://rosettacode.org/wiki/Fibonacci_sequence#Recursive_51)
- [Bubble-sort with Hungarian ("Csángó") folk dance - YouTube](https://www.youtube.com/watch?v=lyZQPjUT5B4)
- [Quick-sort with Hungarian (Küküllőmenti legényes) folk dance - YouTube](https://www.youtube.com/watch?v=ywWBy6J5gz8)
- [Data Structure Visualization](http://www.cs.usfca.edu/~galles/visualization/Algorithms.html)
