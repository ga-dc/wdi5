var SongView = Backbone.View.extend({
  className: 'song',
  tagName: 'div',

  initialize: function() {
    this.template = HandlebarsTemplates['songs/show'];
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  events: {
    'click': 'updatePlayer'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  updatePlayer: function() {
    player.setSong(this.model);
  }
});
