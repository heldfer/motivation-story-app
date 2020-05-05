
## Technology stack
* [React library](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Node.js](https://nodejs.org/) with [Express JS](https://expressjs.com/) (REST API server)
* [Material-UI](https://material-ui.com/)
* [Firebase](https://firebase.google.com/)
  * [Cloud Firestore](https://firebase.google.com/products/firestore) (NoSQL Database)
    * [Documentation](https://firebase.google.com/docs/firestore)
  * [Cloud Functions](https://firebase.google.com/products/functions)
  * [Authentication](https://firebase.google.com/products/auth)

## TODO
* [x] Create firebase account and a new project via UI
  * [x] Add the firebase cloud functions product to our project
* [x] Create a new react project
* [x] Create a REST API server using express
* [x] User registration
  * [] Validate signup fields
  * [x] Create a users collection in cloud firestore database to store more user data

## Install external dependencies

`$ npm i -g firebase-tools`

Install firebase CLI [docs here](https://firebase.google.com/docs/cli)


## Terminal commands


Inside our project root directory we can run the following commands:
___

`$ npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`$ firebase login`

Sign into Firebase using your Google account. This command connects to your Firebase projects.<br />
(You need to install Firebase CLI first)

`$ firebase init`

We need to create a new directory first, before we install any new firebase product.

Inside our firebase-functions directory we can run the following commands:
___

`$ firebase deploy`

Use this command to deploy our firebase project to the server

`$ firebase serve`

Use this command to run our firebase project locally



