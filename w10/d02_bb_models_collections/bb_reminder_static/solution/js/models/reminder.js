var Reminder = Backbone.Model.extend({
  urlRoot: "http://localhost:3000/reminders",
  defaults:{
    completed: false,
    body: "some string"
  },
  initialize: function(){
    console.log("new reminder")
  }
})
