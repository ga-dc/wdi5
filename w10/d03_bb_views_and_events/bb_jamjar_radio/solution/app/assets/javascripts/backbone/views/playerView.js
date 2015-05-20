var PlayerView = Backbone.View.extend({
  el: '#player',

  initialize: function() {
    this.template = HandlebarsTemplates['songs/player']
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
})
