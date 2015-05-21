var RemindersListView = Backbone.View.extend({
  el: '#reminders',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderAll: function() {
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },

  renderOne: function(reminder) {
    var view = new ReminderView({model: reminder});
    view.render();
    this.$el.append(view.$el);
  }
});
