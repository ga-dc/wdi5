var RemindersListView = Backbone.View.extend({
  el: '#reminders',

  initialize: function() {
    console.log("created ReminderListView");
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderOne: function(reminder) {
    var view = new ReminderView({model: reminder});
    this.$el.append(view.$el);
  },

  renderAll: function() {
    this.$el.empty();
    var theView = this;
    this.collection.each(this.renderOne.bind(theView));
  }
})
