# JAMJAR Radio!

JAMJAR needs you! To build out their new awesome site. They're not sure where to start, but they know they want to use backbone. How convenient.

## Models!
Create a working directory for your application. Inside this directory:
- create an `index.html` file
  - load jquery, underscore, backbone CDN's and all required script files
- create a `js` folder and do the following in it
  - create a `models` folder
    - create a file `SongModel.js` in the models folder that defines your backbone model
  - create an `app.js` file
    - in `app.js` assign 4 variables to 4 new instances of songs that have the following:
      - title
      - artist
      - album

Open your `index.html` in the browser and in the console use the instances of your model and use:
- `.get()`
- `.set()`
- `.attributes`
- `.unset()`
- `.has()`
- `.clear`

## Collections!
- in your existing `js` folder create a `collections` folder
  - create a file `songsCollection.js` in the collections folder that defines your backbone collection
  - inside `app.js`:
    - instantiate a new collection that you defined in `js/collections/songsCollection.js` with the 4 SongModel objects you set to variables above

Open your `index.html` in the browser and in the console use the instance of your collection you just defined and play with the following methods:
- `.set()`
- `.add()`
- `.models`
- `.get()`
- `.where()`
- `.findWhere()`
- `.remove()`
- `.reset()`
