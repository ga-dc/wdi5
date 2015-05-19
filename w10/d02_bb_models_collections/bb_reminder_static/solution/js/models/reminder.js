var ReminderModel = Backbone.Model.extend({
  defaults:{
    completed: false,
    body: "some string"
  },
  initialize: function(){
    console.log("new reminder")
  }
})
