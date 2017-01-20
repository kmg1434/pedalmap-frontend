# Ear Training
### by Kevin Grady
[Try it here!](https://kmg1434.github.io/pedalmap-fron)

[Front end Repo](https://github.com/kmg1434/ear-training-front-end)

[Back end Repo](https://github.com/kmg1434/ear-training-back-end)

# Introduction

This program demonstrates a browser based utility for musicians or artists who own or plan to own a collection of effects pedals. User authentication is required to use this application.

## Screenshot
![Active Game State](http://i.imgur.com/m6CeQxJ.png)

## Technologies Used

- Ember
- Javascript
- HTML
- CSS
- Handlebars
- Git, Github.com, and GitHub Pages

## Installation Instructions

Install with `npm install` and `bower install` in your terminal.

## Wireframes

## Development Process

1. Plan wireframes and user stories
2. Develop data structures and relations, create ERD
3. Tackle HTML first to give a graphical UI
4. Create functionality for Sign up/in/out and change password buttons (auth)
5. Crate functionality for CRUD on a user resource (games)
5. Develop game engine and logic
6. Switch all console logs to user readable on screen messages.
7. Develop ReadMe.md file

## Problem Solving Strategy

I mostly used error-driven development, working from the interface. Creating UI
first and working towards its functionality, feature by feature.
I console.log() all valuable data for testing purposes as I code, and add/commit
changes as soon as the current feature is functional. I would continually walk
through all function calls from the first click to understand the flow of the
API and the locally hosted server. Being able to read the HTTP codes was very
helpful for making sure my API functionality was correct. After all local API
functionality, the server was switched over to heroku and the process was
repeated.

## Future Features

- Browser audio compatability
- Game logic and prompts
- Play over multiple devices.
- css styling/colors/fonts

## As A User:

- I can sign up, sign in, sign out, and change Password
- I can create, read, update, and delete a game
- I have ownership over my games
- I can update the score of my game every turn
- I can see how many games I have played
- I will know intuitively how to use the interface

## Wireframes

[Main Page](./full-stack-wireframe.png)

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
