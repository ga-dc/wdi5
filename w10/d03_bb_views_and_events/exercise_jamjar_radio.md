# Exercise - JAMJAR Radio

## Part 1 - Song Model View

Define a song model view much like we did with reminders.

It should:
* have a className of 'song' and a tagName of 'div'.
* have an initialize function that listens to changes on the model
* have a render function that uses a handlebars template.

Example of what a song should look like:
```
<div class='song'>
  <div class='song-image'>
    <img src='http://somedomain.com/imageurl.jpg'>
  </div>
  <div class='song-info'>
    <p>Headlines</p>
    <p>Drake</p>
  </div>
</div>
```

Test everything by instantiating a model, a view for that model, rendering it,
and then manually attaching it to the `#library` div on the page.

## Part 2 - Player View

Define a player view model. It should:

* have a defined `el` that attaches to a div with id of '#player'
* have an `initialize` function that just logs to the console.
* a `render` function that renders using the player template (see below)
* a `setSong` function that takes a song as an argument. it should:
  * set the `song` property of the model to be the song passed in.
  * render the player view

Example of what the player looks like:

```
<div id="player">
  <div class="song-image">
    <img src="http://somedomain.com/some_image.jpg">
  </div>
  <div class="song-info">
    <p>Forever</p>
    <p>Drake, Kanye West, Lil Wayne &amp; Eminem</p>
  </div>
  <audio autoplay="" controls="" src="http://somedomain.com/some_audio.mp3"></audio>
</div>
```

## Part 3 - Connect Songs and the Player

Modify our song view to do the following:

* add an event listener. when the user clicks, it should call `updatePlayer`
* define `updatePlayer` to call `player.setSong`, passing in the associated song
  model for the current view.

Assume that you have global variable called player, which refers to the only
instance of the player view.

## Part 4 - Song Collection View

Define a SongListView, which should:

* have a defined el of `#library`
* have a `renderAll` function and a `renderOne` function, as in our reminders example
* on intialize, it should `listenTo` the 'add' and 'reset' events on its collection


## Part 5 - Update application.js

Update application.js. It should:

* instantiate a player view and store it in a global: `player` variable
* instantiate a new Song Collection and a Song Collection View
* fetch the songs collection.
