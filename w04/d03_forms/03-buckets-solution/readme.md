# Buckets

##The description
- We all want to do things before we kick the bucket. This is your chance to build an application where you can list them all.
- Using Sinatra, create a CRUD app that allows the user to create bucket items, update them and delete them. 
- Users visiting your page should be able to add comments to each item.

## Local Setup

    $ createdb buckets
    $ psql -f db/schema.sql -d buckets
    $ bundle install
    $ ruby db/seeds.rb
    $ bundle exec ruby app.rb

##The details
- You will have two models:
	- `Item`
	- `Comment`

- The `Item` model will have the following attributes:
  - `id`
  - `title`
  - `description`
- As a user, you should be able to:
	- Add an item to your list
		- When you create an item you should be redirected to the item's show page
		- hint: use `redirect`
	- See all the items on the index page - '/'
		- All the items should have link to their show page 
		- The item's show page should have an option to update it and delete it
	- Update an item
		- You should be able to update the title and description of your item
		**Bonus** You can change the status of your item to completed
	- Delete an item and get redirected to the index page
	- You may use POST instead of DELETE and PATCH

- The `Comment` will have the following attributes:
	- `id`
	- `body`
	- `item_id`
- The commenting form should be on the item's show page (look up partials in sinatra)
- As a user you should be able to:
	- Update a comment
	- Delete a comment