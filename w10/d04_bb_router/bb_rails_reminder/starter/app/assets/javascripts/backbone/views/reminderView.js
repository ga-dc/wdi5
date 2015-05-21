var ReminderView = Backbone.View.extend({
  className: 'reminder',
  tagName: 'div',

  events: {
    'click.finish': 'markComplete'
  },

  initialize: function() {
    console.log("created reminder view");
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(HandlebarsTemplates['reminders/show'](this.model.toJSON()));
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
