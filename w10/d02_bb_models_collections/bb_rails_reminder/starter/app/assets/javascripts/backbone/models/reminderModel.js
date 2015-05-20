var ReminderModel = Backbone.Model.extend({
  defaults: {
    completed: false
  },
  urlRoot: "/reminders"
})
