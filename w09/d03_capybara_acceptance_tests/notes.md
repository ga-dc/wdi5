# Acceptance Testing

Learning Objectives

- Explain Acceptance Tests
- Think critically about the requirements of a user story
- Use Capybara to write acceptance tests

## Vocab

*User Stories* one or more sentences in the everyday or business language of
the end user or user of a system that captures what a user does or needs to do
as part of his or her job function. Things that the system needs to do for them.

*Acceptance Tests* a test conducted to determine if the requirements of a
specification or contract are met.

*Feature specs* high-level tests meant to exercise slices of functionality
through an application.

*Quality Assurance* the team that "assures quality." Or attempts to ascertain
through testing the product.

*Capybara* An Acceptance test framework for web applications

*DOM* The Document Object Model. A way of representing objects in HTML.

*Headless Browser* A Broswer without a GUI.  It downloads the HTML and renders
the DOM without visualization

## Conceptual

Acceptance tests are created from user stories.

What ever it takes to ensure the functionality works.

A user story is not considered complete until it has passed its acceptance
tests.

"As a bank customer I want to view a receipt of my transaction so I my money was deposited and I have a history of the transaction"

```
Given I deposited money into my account
and I've signed out
When I visit the site again
and sign in
and click on account history
Then I should see the previous transaction
```

Acceptance tests should be automated so they can be run often.

*Thus we use Capybara*

## Mechanical

- [Setting up Capybara with Rails](https://gist.github.com/e32dfe77f10657ebb5ed)

## Activity

Create acceptance criteria for each of your user stories

What constitutes a requirement?

If you're having a hard time thinking about these, pair up with a neighbor
Have them ask you about a user story and ask what steps a user would take
to know it's done

Resources

- [Capybara](https://github.com/jnicklas/capybara)
- [Acceptance Testing](http://www.extremeprogramming.org/rules/functionaltests.html)
