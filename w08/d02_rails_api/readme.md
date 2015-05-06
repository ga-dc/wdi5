# Rails APIs

## Learning Objectives

- Describe the concept of a resource, and how it may be represented in various formats.
- Use `to_json` to represent a model instance as JSON.
- Use `render json: ` to render a JSON response from a rails controller
- Build a rails app that supports CRUD actions using a JSON interface

## Outline

### Framing (10 minutes)

So far, we've written two kinds of web apps:
* Rails Apps: What is their job? Manage Data & Generate HTML
* JavaScript Apps: Manage data and modify the DOM (HTML) (no persistence though)

There's clearly some overlap here... introduce the spectrum of apps:

#### Pirates vs. Ninjas
![Pirates vs. Ninjas](media/PvN_where_be_that_ninja.png)
* PIRATES (Plain, Inherently Rails-y Apps That're Essentially  Static)
* Rails Apps + Little bit of JS (no AJAX)
* Rails Apps that serve static HTML but can respond to JS requests as well.
* Rails apps that mainly serve JSON to JS (some rendering)
* NINJAs (Nicely Interactive Nothing-but JavaScript Apps)

Demo:
* CRUD Rails App (PIRATE)
* Single Page App: Trello or Gmail (NINJA)

#### Write-Pair-Share on Whiteboard (8 minutes)
What are the advantages/disadvantages of the NINJA end of the spectrum?
  * Shared backend - Mobile Apps can use the same backend
  * Speed (offloading work to the client, rendering HTML is slow)
  * Fewer page reloads (feels faster / more interactive)
  * Single Responsibility
  * Increased Complexity of codebase

### Resources

Explain what a resource is: an underlying concept or object that can be expressed
in many formats. We often have one or more interfaces to manage resources (e.g. REST)

Common Formats:
* HTML
* JSON
* XML
* CSV

### Trillo

Intro data model and seeds file.
They use rails console to explore for 5 minutes.

#### JSON

Quick refresher on JSON. Intro `to_json`.

#### Rendering JSON

Test each one in PostMan

##### I Do
Demo adding an index method to CardsController that renders JSON.

##### You Do
Add a show method

##### We Do
Add create

##### You Do
Add update & destroy
