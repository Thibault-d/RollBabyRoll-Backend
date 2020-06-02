# Project Name

## Instructions how to start

create `.env` file like the example `.env.sample`
start with `npm start`

**http://localhost:3000**

## Description

The Backend of this application is a REST API created to have an interface with Mongo DB. 


## Motivation

I wanted to create a RESTful API to get experience in making Front and Back end communicate

## User Stories

Stroller API:

- Add Stroller to DB
- Read Stroller from DB
- Update Stroller from DB

## Backlog

- Remove Stroller from DB

Authentication
- Login
- Logout

## ROUTES Backend:

### Endpoints

| Method | Path                     | description                | Body |
| :----: | ------------------------ | -------------------------- | ---- |
|  GET   | `/`             | return all strollers in DB |      |
|  POST  | `/`             | add new stroller to DB     |      |
|  POST  | `/strollers/detail/:id`  | update a selected stroller |      |
|  POST  | `/strollers/update/:id` | delete a selected stroller |      |

## Links

https://rollbabyroll.herokuapp.com/

### Trello

https://trello.com/b/5TnPaoZI/roll-baby-roll

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Thibault-d/RollBabyRoll-Back/)

[Deploy Link](http://heroku.com/)

### Slides

[Slides Link](http://slides.com/)
