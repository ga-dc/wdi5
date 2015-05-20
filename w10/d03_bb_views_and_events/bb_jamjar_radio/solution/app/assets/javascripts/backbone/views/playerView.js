var PlayerView = Backbone.View.extend({
  el: '#player',

  initialize: function() {
    console.log("player loaded.")
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    var renderedHTML = HandlebarsTemplates['songs/player'](this.model.toJSON());
    this.$el.html(renderedHTML);
  }
})
