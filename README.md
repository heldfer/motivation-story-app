
## Technology stack
* [React library](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Node.js](https://nodejs.org/) with [Express JS](https://expressjs.com/) (REST API server)
* [Material-UI](https://material-ui.com/)
* [Firebase](https://firebase.google.com/)
  * [Cloud Firestore](https://firebase.google.com/products/firestore)
  * [Cloud Functions](https://firebase.google.com/products/functions)
  * [Authentication](https://firebase.google.com/products/auth)

## TODO
* [x] Create firebase account and a new project via UI
  * [x] Add the firebase cloud functions product to our project
* [x] Create a new react project 

## Install external dependencies

### `$ npm i -g firebase-tools`

Install firebase CLI [docs here](https://firebase.google.com/docs/cli)


## Terminal commands


__Inside our project root directory we can run the following commands:__

`$ npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`$ firebase login`

Sign into Firebase using your Google account. This command connects to your Firebase projects.<br />
(You need to install Firebase CLI first)

`$ firebase init`

We need to create a new directory first, before we install any new firebase product.

__Inside our firebase-functions directory we can run the following commands:__
`$ firebase deploy`

Use this command to deploy a firebase project



