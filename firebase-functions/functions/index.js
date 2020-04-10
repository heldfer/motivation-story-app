const functions = require('firebase-functions').region('europe-west2');
const admin = require('firebase-admin');

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://motivation-story-app.firebaseio.com"
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions
  .https.onRequest((req, res) => {
    res.send("Hello Helder from europe location!");
  });

exports.getStories = functions
  .https.onRequest((req, res) => {
    admin.firestore()
      .collection('stories')
      .get()
      .then(data => {
        let stories = [];
        data.forEach(doc => {
          stories.push(doc.data())
        });
        return res.json({ data: stories });
      })
      .catch(err => {
        console.log('Error getting stories ', err)
      })
  });

exports.createStory = functions
  .https.onRequest((req, res) => {
    const newStory = {
      user: req.body.user,
      description: req.body.description,
      title: req.body.title,
      createdAt: admin.firestore.Timestamp.fromDate(new Date())
    };

    admin.firestore()
      .collection('stories')
      .add(newStory)
      .then(storyCreated => {
        return res.json({ message: `Story with id ${storyCreated.id} created successfully!`, data: storyCreated })
      })
      .catch(error => { 
        res.status(500).json({ error, message: 'Ups! Something went wrong.' })
        console.error(error)
      })
  });
