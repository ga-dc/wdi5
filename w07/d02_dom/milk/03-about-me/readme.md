# About Me

- Add a script tag to the bottom.
- Change the body style so it has a font-family of "Arial, sans-serif".
- Replace each of the spans (nickname, favorites, hometown) with your own information.
- Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
- Create a new img element and set its src attribute to a picture of you. Append that element to the list.

## Bonus

- Create a function that takes an object as input and renders the html.

e.g.

    var me = {
      nickname: "j-dog",
      favorites: "css, git",
      hometown: "na, I'm a navy brat"
    }

    render( me );
    # => Should populate the html:
    <li>Nickname: <span id="nickname">j-dog</span>
    <li>Favorites:  <span id="favorites">css, git</span>
    <li>Hometown: <span id="hometown">na, I'm a navy brat</span>

## Double Bonus

- Create a function that takes an array of objects and generates the `<ul>` and `<li>`s for each person (object).