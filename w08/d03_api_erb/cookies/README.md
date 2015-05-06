# W08D03 ERB / API

- Represent any resource as HTML or JSON
- Utilize AJAX within a Rails application to perform partial page updates
- Render JS in Rails
- Describe the benefits of the asset pipeline
- Distinguish between production and development environments

```
respond_to
rake assets:precompile
//require and //require_tree . in CSS and JS
```

## Intro

- Make our Trillo app work without HTTP requests
  - Why?
  - 

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

- Getting your asset
  - `rails new whatever -d postgresql`, `rails g scaffold greeting`, then look at `application.erb.html`



https://github.com/ga-dc/trillo_static_ajax_rails_api
