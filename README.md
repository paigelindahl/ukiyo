# UKIYO

## **Contributors: [Saad Islam](https://github.com/saadxislam), [Kourtney Huget](https://github.com/kourtneyhuget), [Paige Lindahl](https://github.com/paigelindahl)**

## ABOUT THE PROJECT

Ukiyo is a one stop wellness app intended to help alleviate stress and promote positive feelings. Ukiyo provides a dashboard with access to meditation, yoga, gratitude journaling and a todo list organizer. Every morning, Ukiyo asks the user how they are feeling and provides journaling questions based on their response. Users are then prompted to set one task for the day that they can go to bed content knowing they accomplished. The user is able to save quotes, yoga videos, and meditation videos to their favourites and access past journaling entries.

## FINAL PRODUCT

## STACK USED

### Front-End

- React
- SCSS

### Back-End

- PostgreSQL
- Node.js
- Express

## RUNNING PROJECT ON LOCAL MACHINE

Live version:

[Ukiyo](http://ukiyo-final1.herokuapp.com/)

From the repo:

1. Fork and clone this repository
2. Run `npm install` to install dependencies
3. Copy the .env.example file to a .env file
4. Set the .env file to include database information
5. Run `npm run db:reset` to setup the database
6. You will need to run two terminals. On one terminal start the express server by running `node server.js` in the root directory. In the other terminal, run `cd react-front-end` and then `npm start`
7. App will be ran on http://localhost:3000/

## DEPENDENCIES

- body-parser: 1.18.3
- dotenv: 8.2.0
- express: 4.16.4
- nodemon: 1.18.7
- pg: 8.5.1
- axios: 0.18.1
- node-sass: 4.0.0
- react: 16.8.6
- react-router-dom: 5.2.0
