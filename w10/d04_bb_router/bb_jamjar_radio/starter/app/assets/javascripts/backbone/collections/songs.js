var SongsCollection = Backbone.Collection.extend({
  initialize: function() {
    console.log('New Songs Collection');
  },
  model: SongModel,
  url: '/songs'
});
