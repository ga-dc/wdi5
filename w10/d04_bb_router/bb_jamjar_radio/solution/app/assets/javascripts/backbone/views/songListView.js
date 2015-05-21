var SongListView = Backbone.View.extend({
  el: '#library',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderAll: function() {
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(song) {
    var songView = new SongView({model: song});
    this.$el.append(songView.$el);
  }
});
