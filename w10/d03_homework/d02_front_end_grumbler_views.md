Homework 11-02

#### Learning Objectives
- Practice creating Views in Backbone
- Practice adding listeners on Backbone Views for models and collections
- Practice adding event listeners to views for user interactions

# Grumblr 2.0

### Part 1
Create a template for a single grumble. A grumble should have:

- an author
- a title
- an avatar
- the content
- a delete button

Define a new view for a single grumble. This view should render the grumble template with the data from that view's specific model.

- the classname each of these views should be set to `grumble`
- Add listeners for change and destroy events on the views model.
- Add an event listener for the delete button on each view. 
  - When the delete button is clicked the view should be removed from the page
  - The model attached to that view should also be removed from the database

### Part 2
Define a Grumble List View. This view should have a collection assigned to it.

- The el for this view should be set to the div with an id of `grumble-list`
- Add listeners for add and reset events on the view's collection
  - When a new model is added to the collection, a new view should be created for that model and it should be prepended to the page
  - When the collection is reset, new views should be created for all models and they should be appended to the page

### Part 3
Define a template for a new grumble form.

Define a Form View. This view should contain a form for creating a new Grumble.

- This view should make use of the global Grumble Collection.
- Add event listeners on this view so that when the form is submitted it will:
  - take the values from the form's inputs
  - create a new model and add it to the collection
  - the new model should be persisted in the database

