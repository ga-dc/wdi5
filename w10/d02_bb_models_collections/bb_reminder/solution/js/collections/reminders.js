var Reminders = Backbone.Collection.extend({
  initialize:function(){
    console.log("created a new reminders collection")
  },
  model: Reminder
})
