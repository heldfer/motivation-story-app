const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions
  .region('europe-west2')
  .https.onRequest((req, res) => {
    res.send("Hello Helder from europe location!");
  });

exports.getStories = functions
  .region('europe-west2')
  .https.onRequest((req, res) => {
    admin.firestore().collection('stories').get()
      .then(data => {
        let stories = [];
        data.forEach(doc => {
          stories.push(doc.data())
        });
        return res.json({ data: stories });
      })
      .catch(err => {
        console.log('Error getting documents ', err)
      })
  });
