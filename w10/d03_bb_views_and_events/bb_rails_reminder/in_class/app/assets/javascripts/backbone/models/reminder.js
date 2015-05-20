var ReminderModel = Backbone.Model.extend({
  initialize: function(){
    console.log('New Reminder Model Created');
  },
  defaults: {
    completed:false
  },
  urlRoot: '/reminders'
});
