# The Landlord

## Prompt:
You are a landlord in need of an app that will track your apartments and tenants. 

## Part 1 - Creating the classes

Define classes for __Person__ and __Apartment__

A person should have the following attributes:

* name
* age
* gender

An apartment should have the following attributes:

* address (a single string including floor and unit numbers if applicable)
* monthy_rent
* sqft
* num_beds
* num_baths
* renters (the person or persons living in the apartment)

Okay, now take 20 minutes to first read-through and think about the methods & behavior outlined below.

## Part 2 - Creating the program functionality & menu display

* The program should instantiate several new apartments at the outset.
* The user should then be presented with the following menu options
  * Listing all apartments
  * View an apartment's details
  * Add an apartment
  * Add a tenant to an apartment
  * Quit
* The program should return to the menu until the user quits

## View apartment details
* Tell the user the address, monthly_rent, sqft, num_beds, num_baths, and renters

## Adding an apartment
* Make sure to get the appropriate input from the user when creating an apartment

## Adding a tenant to an apartment
* Make sure to get the appropriate input from the user to create your person
* Make sure to ask which apartment they want to live in
* Add the person to that apartment
* __NOTE:__ Only two people can live in an apartment due to zoning laws (at least until you get to the bonus).

## Listing the apartments
* List all of the apartments
* If the apartment is unoccupied(no renters) you should say something like:
  `Apt 1A is 750 sqft and has 1 bed and 1 bath. It costs $2500 a month`
* If the apartment is occupied by a tenant, you should say something like:
  `Mikael lives in Apt 1A`

### Bonus
* Increase the number of people that can live in an apartment to up to the number of bedrooms in the apartment. Adjust the rest of your program accordingly.
* Add functionality so you can evict a tenant from an apartment.