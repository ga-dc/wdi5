var ReminderView = Backbone.View.extend({
  tagName: "div",
  className: "reminder",

  events: {
    'click.finish': 'markComplete'
  },

  initialize: function() {
    console.log("new ReminderView instantiated");
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  markComplete: function() {
    this.model.destroy();
    this.$el.fadeOut(3000);
  },

  render: function() {
    var renderedHTML = HandlebarsTemplates['reminders/show'](this.model.toJSON());
    this.$el.html(renderedHTML);

    // this.$el.empty();
    // this.$el.append("<p>" + this.model.get("body") + "</p>");
    // this.$el.append("<span class='finish'>Finish</span>");
  }

});
