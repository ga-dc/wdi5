var SongView = Backbone.View.extend({
  className: "song",
  tagName: "div",

  // for DOM EVENTS
  events: {
    'click': 'updatePlayer'
  },

  initialize: function() {
    console.log("new song view instantiated");
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    var renderedHTML = HandlebarsTemplates['songs/show'](this.model.toJSON());
    this.$el.html(renderedHTML);
  },

  updatePlayer: function() {
    player.setSong(this.model);
  }

});
