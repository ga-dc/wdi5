var PlayerView = Backbone.View.extend({
  el: '#player',

  initialize: function() {
    console.log("player view instantiated");
  },

  render: function() {
    var renderedHTML = HandlebarsTemplates['songs/player'](this.song.toJSON());
    this.$el.html(renderedHTML);
  },

  setSong: function(songToSet) {
    this.song = songToSet;
    this.render();
  }

});
