var ReminderView = Backbone.View.extend({
  className: "reminder",
  tagName: "div",

  events: {
    'click.finish': 'markComplete'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    console.log("loaded reminder view, bro");
  },


  render: function() {
    this.$el.html(HandlebarsTemplates['reminders/show'](this.model.attributes));

    // or 
    // this.$el.empty();
    // this.$el.append("<p>" + this.model.get("body") + "</p>");
    // this.$el.append("<div class='finish'>Finish</div>");
  },

  markComplete: function() {
    var view = this;
    this.model.destroy()
      .done(function(){
        view.$el.fadeOut();
      })
      .fail(function() {
        alert("couldn't destroy")
      });
  }
});
