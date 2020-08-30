import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEFoyrOBGk80-lOgK9JyqtkqVe1e8Ka5M",
  authDomain: "clone-3608f.firebaseapp.com",
  databaseURL: "https://clone-3608f.firebaseio.com",
  projectId: "clone-3608f",
  storageBucket: "clone-3608f.appspot.com",
  messagingSenderId: "852474764197",
  appId: "1:852474764197:web:05ec8bea61c6dcf6c4664c",
  measurementId: "G-MY884XV70C"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};