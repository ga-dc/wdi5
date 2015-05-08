# W08D03 JS on Rails

- Represent any resource as HTML or JSON
- Utilize AJAX within a Rails application to perform partial page updates
- Render JS in Rails
- Combine multiple assets using manifests
- Describe the benefits of the asset pipeline
- Distinguish between production and development environments

Note:

Code snippets to cover:

```
respond_to
rake assets:precompile
//require
//require_tree .
```

---

# Framing (10 min)

1. We started trillo with a small rails app to provide the json api.
2. Then we created separate html/css files that accessed our api.
3.  Now, we are going full circle and getting rails to render our html and use our javascript.

Use diagrams

Remind students that this only supports json.
But now, we want it to support html and json.

What do we need to support this?
- Use suggestions from class to make list
- Routes?
- Controller?
- Views?
- JS
- CSS

Write Pair Share:
- (2 min) Think silently for 2 min and write your answers to each
- (2 min) With pair, Share answers, alternating
- (10 min) Loop thru each group, getting an new suggestion from each.  Using suggestions, create steps on Whiteboard

Steps:
- routes? cards#index. Works now
  - Demo (before and after)
    - /cards
    - /cards.json
    - /cards.html [optional]

- Controller?  Needs support for html
- Views? app/views/cards/index.html.erb
- Javascript? copy wholesale
- CSS? already identical.

---

## We Do: Update CardsController to support HTML

```
git clone https://github.com/ga-dc/trillo_static_ajax_rails_api
```
Start from master branch.
Solution is in 'solution' branch.


```rb
respond_to do |format|
  format.html { render :index }
  format.json { render json: @cards }
end
```

Discuss:
- respond_to
- format.html/json
- render

Test it:
- Error from `/cards` is segue to...

---

## You Do (6 min): Move the html (just html)

Productive struggle.

From `static_ajax/solution/js/` to `trillo/app/assets/javascripts`

Note:

Simply copy the html into app/views/cards.html.erb

---

## We Do (30 min): Discuss html and move js.

Discuss:
- cards/index.html.erb
- css is identical
- app/assets/javascript
- manifest
  - `require_tree .` (note: dot - current dir)

- copy/paste js to app/assets/javascripts/: js/app.js, js/views/, js/models/
  - run.  See dependency issue.
  - rename app/assets/javascripts/app.js to 0_init.js
  - run.  Success!
- show 'sources' tab in dev console

---

## A couple ways to do JS in Rails

- `.js`
  - `app/assets/javascripts/[something].js`
  - variations:
    - `.js.erb`
      - Same thing, but the whole file is JS instead of HTML with inline JS
      - Why don't we like these?
    - `js.coffee`
- `.html.erb`
```
<script>
$(document).ready(function(){
  $("#<%= @user.id %>").on("click", function(){
    alert("Hey there, <%= @user.name %>!");
  });
});
</script>
```



##  Getting info into javascript

TODO! Need example to create a WHY for this.  A specific problem that we need to solve that forces us to get data from rails into js.

- AJAX.
- Generate js variable in `js.erb` file
  ``` erb
  var card_id=<%= card.id %>
  ```
- data attribute in html
  - rails uses hash like js: `{data: {id: model.id}}`
- gon: https://github.com/gazay/gon



## Getting your assets

- Take a look at `application.erb.html:

```
<%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track' => true %>
<%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
```

- How does this show up in the HTML?

- Compare a locally-run app to a Heroku app
  - Why does the local app have so many fewer JS/CSS files referenced in the HTML than the production app?

## Sprockets
- The name of a Ruby gem (there isn't a single sprocket)
- "Concatenates" (minifies) all CSS into one file, and all JS into one file
  - In **production only**
  - Why?
    - Faster

- The file is **fingerprinted**
  - Hashes the file's contents and uses that as the file name
    - So always changes when file's contents change
  - Why?
      - Not to keep track of files
      - For **cache busting**
        - Browsers save coipes of the stuff they've downloaded from URLs. This shows them a new URL so they get new changes.
