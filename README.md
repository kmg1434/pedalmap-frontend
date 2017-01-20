# PedalMap
### by Kevin Grady


[Try it here!](https://kmg1434.github.io/pedalmap-fron)

[Front end Repo](https://github.com/kmg1434/ear-training-front-end)

[Back end Repo](https://github.com/kmg1434/ear-training-back-end)

# Introduction

<<<<<<< HEAD
Note: User authentication is required to use this application, so please sign up
 before using it!

This program is a browser based utility for musicians who own, or plan to own,
a collection of effects pedals. Musicians tend to switch up their equiptment
often, and suffer from what is known as GAS (gear aquisition syndrome). A
collection of pedals will be sorted in a particular order and orientation so
that they neatly (or not so neatly) fit on a board of some shape or size, most
commonly a rectangle wider than it is long. This application will help
musicians determine just how big their pedal board has to be before purchasing
pedals.
=======
This program demonstrates a browser based utility for musicians or artists who own or plan to own a collection of effects pedals. User authentication is required to use this application.

## Screenshot
![Active Game State](http://i.imgur.com/m6CeQxJ.png)
>>>>>>> components

## Technologies Used

- Ember (front end framework)
- JavaScript
- HTML
- CSS
- Handlebars
- Git, Github.com, and GitHub Pages

## Installation Instructions

Install with `npm install` and `bower install` in your terminal.

## Wireframes

![Wireframes](http://imgur.com/R27lQxI)

![Wireframes](http://imgur.com/qVQ4V5N)

## Development Process

1. Plan wireframes and user stories
2. Develop data structures and models, creating a front end ERD
3. Develop user authentication functionality (Sign up/in/out, change password)
4. Develop functionality for CRUD on user resources (boards and pedals)
5. Develop graphical representation of boards and pedals
7. Develop ReadMe.md file

## Problem Solving Strategy

I followed the "data down / action up" Ember model, using error-driven
development, generally working from the interface upwards. A general
feature-through strategy starts by creating a button, sending an action,
logging the action and location in the console, and tracing it back to the
route, where Ember can communicate with the back-end ERD. Creating UI
first and working towards its functionality, feature by feature, has been more
effective for me than working from the route downwards

## Future Features

- Browser audio compatability
- Game logic and prompts
- Play over multiple devices.
- css styling/colors/fonts

## As A User:

- I can sign up, sign in, sign out, and change my Password
- I can create, read, update, and delete a board
- I have ownership over my boards
- I can see how many boards I have
- I can update the contents and attributes of my boards
- I will know intuitively how to use the interface without instruction

## Wireframes

[Main Page](./full-stack-wireframe.png)

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
