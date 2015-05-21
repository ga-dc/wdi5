var ReminderView = Backbone.View.extend({
  className: 'reminder',
  tagName: 'div',

  events: {
    'click.finish': 'markComplete'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(HandlebarsTemplates['reminders/show'](this.model.toJSON()));
  },

  markComplete: function() {
    var view = this;
    this.model.save({
        complete: true
    }).done(function(response){
        view.$el.fadeOut();
    }).fail(function(response) {
        console.log(response);
    });
  }
});
