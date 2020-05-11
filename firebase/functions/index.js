const functions = require('firebase-functions').region('europe-west2')
const admin = require('firebase-admin')
const app = require('express')()
const asyncHandler = require('express-async-handler')
const firebase = require('firebase')
const configs = require("./configs.json")

admin.initializeApp({
  credential: admin.credential.cert(configs.serviceAccountKey),
  databaseURL: "https://motivation-story-app.firebaseio.com"
})

firebase.initializeApp(configs.firebase)

const db = admin.firestore()

const auth = (req, res, next) => {

}

app.get('/stories', asyncHandler(async (req, res) => {
  const response = await db.collection('stories').orderBy('createdAt', 'desc').get()
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
  const response = await db.collection('stories').add(newStory)

  return res.json({ message: `Story with id ${response.id} created successfully!` })
}))

// Signup route
app.post('/signup', asyncHandler(async (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username || null,
    avatar: req.body.avatar || null,
    createdAt: new Date().toISOString(),
    userId: null
  }

  // Check if this new user already exists
  const user = await db.collection('users').doc(newUser.email).get()

  if (user.exists) {
    return res.status(400).json({ message: 'That user already exists' })
  }
  
  const response = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
  const token = await response.user.getIdToken()

  newUser.userId = response.user.uid

  await db.collection('users').doc(newUser.email).set(newUser)

  return res.status(201).json({ message: 'User created successfully!', data: { token } })
}))

app.post('/login', asyncHandler(async (req, res) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    const token = await response.user.getIdToken()
  
    return res.json({ message: 'User successfully signed in!', data: { token } })
  } catch (error) {
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      return res.status(401).json({ message: 'Bad credentials', error: error.code })
    }

    return error
  }
}))

app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).json({ message: 'Server error', error: error.code })
})

exports.api = functions.https.onRequest(app);