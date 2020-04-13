const functions = require('firebase-functions').region('europe-west2')
const admin = require('firebase-admin')
const express = require('express')
const asyncHandler = require('express-async-handler')

var serviceAccount = require("./serviceAccountKey.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://motivation-story-app.firebaseio.com"
})

const app = express()

app.get('/stories', asyncHandler(async (req, res) => {
  const response = await admin.firestore().collection('stories').orderBy('createdAt', 'desc').get()
  let stories = []
  response.forEach(doc => {
    stories.push({
      id: doc.id,
      ...doc.data()
    })
  })

  return res.json({ data: stories })
}))

app.post('/story', asyncHandler(async (req, res) => {
  const newStory = {
    user: req.body.user,
    description: req.body.description,
    title: req.body.title,
    createdAt: new Date().toISOString()
  }
  const response = await admin.firestore().collection('stories').add(newStory)

  return res.json({ message: `Story with id ${response.id} created successfully!` })
}))

exports.api = functions.https.onRequest(app);