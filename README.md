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

Stroller API:
- Add Stroller to DB
- Read Stroller from DB
- Remove Stroller from DB
- Update Stroller from DB


## Backlog

Authentication
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
