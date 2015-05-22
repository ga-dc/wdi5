var RemindersCollection = Backbone.Collection.extend({
  initialize: function() {
    console.log('New Reminders Collection');
  },
  model: ReminderModel,
  url: '/reminders'
});
