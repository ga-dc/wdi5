var RemindersCollection = Backbone.Collection.extend({
  model: ReminderModel,
  url: '/reminders'
})
