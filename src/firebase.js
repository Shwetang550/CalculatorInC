import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD22GqvkEl0KOKGchms8OHt5iCMf7TVW7s",
  authDomain: "todo-app-8118e.firebaseapp.com",
  projectId: "todo-app-8118e",
  storageBucket: "todo-app-8118e.appspot.com",
  messagingSenderId: "116420528225",
  appId: "1:116420528225:web:b8af336f40396d913a4220",
  measurementId: "G-T5ZFHVQ81Q"
});

const db = firebase.firestore();

export default db;