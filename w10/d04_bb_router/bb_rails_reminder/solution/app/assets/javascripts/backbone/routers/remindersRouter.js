var RemindersRouter = Backbone.Router.extend({
    routes: {
        "complete": "complete",
        "incomplete": "incomplete",
        "": "reminders"
    },

    initialize: function initialize () {
        collection = new RemindersCollection();
        listView = new RemindersListView({collection: collection});
        collection.fetch({reset: true});
    },

    reminders: function reminders () {
        collection.fetch({reset: true});
    },

    complete: function complete () {
        collection.fetch({reset: true, data: {completed: true}});
    },

    incomplete: function incomplete () {
        var collection = new RemindersCollection();
        collection = new RemindersCollection(collection.where({completed: false}));

        console.log(collection)

        new RemindersListView({collection: collection});
        collection.fetch({reset: true});
    }
});
