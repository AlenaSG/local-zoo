# Local Zoo

by Alena Golovina, 08.18.2017

## Description

An Angular2 app for a local Zoo to track animals (eg.the animals' likes and dislikes, or how many caretakers each requires).

## Known Bugs
* Save new animal stopped working
* Filtering by maturity does not work

## Animal Model
---------
Species: "Northwest Black Tailed Deer"
Name: "Tinkerbell"
Age: 8
Diet: "Herbivore"
Location: "Northern Trail"
Caretakers: 2
Sex: "Female"
Likes: "Delicate roots and leaves"
Dislikes: "Loud Noises"
---------
## Requirements

Users (zoo staff), should be able to add newly-admitted animals to the app.


## As a user…

* I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
* I want to view a list of animals I have logged.
* I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
* I want to click an animal to edit its name, age or caretakers.

## Extended Functionality/Additional Features

* Build out the animal model to further enhance the app.
* Add custom SASS styling with corresponding Gulp tasks to compile.
* Display of the total number of caretakers needed in a day.
* Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.
* Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.
* Add a new master component to average the total age for each species.
* Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)

## Set Up Instructions
* Clone this repository from GitHub
* Run npm install
* Run gulp build, and gulp serve in the Terminal

## License

MIT license, 2017
