# Project Name

## Instructions how to start

create `.env` file like the example `.env.sample`
start with `npm start`

**http://localhost:3000**

## Description

Chosing the best stroller for your baby shouldn't require a PhD.
Roll Baby Roll is the best Stroller comparator, so you can quickly see and compare what matters for you.

## Motivation

I wanted to create a RESTful API to get experience in making Front and Back end communicate

## User Stories

**View All** - As a user I want to land on the page containing the listing of all Strollers existing in the DB

**Add stroller** - As an Admin user, I want to access a form allowing to add a Stroller in the DB

**Remove stroller** - As an Admin user, I want to be able to remove a Stroller from the DB if the product isn't sold anymore

**Update stroller** - As an admin user, I want to be able to udpate any parameter of any existing Stroller

**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

## Backlog

List of other features outside of the MVPs scope

- Signup
- Login
- Logout

## ROUTES Backend:

### Endpoints

| Method | Path                     | description                | Body |
| :----: | ------------------------ | -------------------------- | ---- |
|  GET   | `/strollers`             | return all strollers in DB |      |
|  POST  | `/strollers`             | add new stroller to DB     |      |
|  POST   | `/strollers/update/:id`  | update a selected stroller |      |
|  POST   | `/strollers/deleted/:id` | delete a selected stroller |      |


## Links

### Trello

https://trello.com/b/5TnPaoZI/roll-baby-roll

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Thibault-d/RollBabyRoll-End/)

[Deploy Link](http://heroku.com/)

### Slides

[Slides Link](http://slides.com/)
