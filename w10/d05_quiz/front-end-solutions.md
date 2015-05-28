# Front End Solutions

1. Describe the role of the major components of Backbone. (Models, Collections, Views, and Routers).

    Models - Provide an interface to store / retrieve / and manipulate data in our application. Collections - Provide a way to work with sets of model instances, assist in fetching / syncing data to the server, as well as getting filtering, iterating, etc with those sets. Views - Handle rendering of models / collections to HTML, responding to model / collection events, and responding to DOM events within the el. Routers - Manage the URL to allow saving / restoring of state, respond to changes in URL by updating the state of the application.

1. Describe the difference between a View with an `el` property, and a view with a `className` and `tagName` properties.

    A view with an `el` will be attached to an existing element in the DOM (if one with a matching selector exists). A view without an `el` will have a new element created, but it will not be attached to the DOM. Some other process (e.g. a collection view) must attach it to the DOM for it to be visible.

1. Describe the 3 major categories of events in Backbone (view events, model/collection events, and route events), and how they are commonly used.

    View events - These are the standard browser DOM events, such as clicking, hovering, scrolling, etc. Backbone routes them to views whose `el` contains the event. Model / Collection Events - Events such as when a model is changed or destroyed, or when a collection is reset or added to, allow us to update the view to always reflect the data. URL / Router events - Events that fire when the URL changes (#routes). Used so a router can keep the state of the application up to date when a user clicks links within our app.

1. What are the main jobs of a model view vs. a collection view?

    A model view renders a single model, and handles DOM / Model events for that model. A collection view is tied to a collection, and usually handles rendering item views for models in that collection, and attaching them to the page as appropriate.
