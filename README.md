
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
* [x] Client - Create a new react project
* [x] Server - Create a REST API server using express
  * [x] Create a users collection in cloud firestore database to store more user data
  * [] Server Routing
    * [x] Signup - User registration 
      * [] Validate signup fields
    * [] Login - User can sign in

## Install external dependencies
Install firebase CLI [docs here](https://firebase.google.com/docs/cli)

```
$ npm i -g firebase-tools
```

## Compiles and hot-reloads for development
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
$ npm start
```
___
## Firebase CLI commands, create a new directory inside your project (this project: firebase-functions)
Make use you have Firebase CLI installed, after that run the below commands inside the new directory created

### Sign into Firebase using your Google account
This command connects to your Firebase projects. 

```
$ firebase login
```

### Install new firebase products
```
$ firebase init
```

### Deploy our firebase project to the server
```
$ firebase deploy
```

### Run our firebase project locally
```
$ firebase serve
```



