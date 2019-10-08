import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  databaseURL: 'https://dev-links-6d652.firebaseio.com',
  projectId: 'dev-links-6d652',
})

export const db = firebase.firestore()
