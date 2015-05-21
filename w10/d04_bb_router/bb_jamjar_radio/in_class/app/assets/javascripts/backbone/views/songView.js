var SongView = Backbone.View.extend({
  className: 'song',
  tagName: 'div',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  events: {
    'click': 'updatePlayer'
  },

  render: function() {
    var renderedHTML = HandlebarsTemplates['songs/show'](this.model.toJSON());
    this.$el.html(renderedHTML);
  },

  updatePlayer: function() {
    player.setSong(this.model);
  }
});
