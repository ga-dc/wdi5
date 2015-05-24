# Gif of the Day!

Create a jQuery plugin that shows the latest gif given a category.

Example usage:

    $('.gif-container').gifOfTheDay({
      category: 'cats'
    });

## Step 1

Create a new html document and link to jQuery. Add a `<div>` with the class `gif-container`.

## Step 2

When a user adds `$('.gif-of-the-day').gifOfTheDay();` to their javascript,
the text of the div should be set to "gif here"

## Step 3

Instead of setting the text, use `$.getJSON` to fetch the latest gif from some
hardcoded category, and add the first image to the container div.

## Step 4

Allow users to specify their own category by accepting options.

    $('.gif-container').gifOfTheDay({
      category: 'cats'
    });

## Bonus !

Add a previous and next button. Clicking on "next" should show the next gif from the api.