import firebase from 'firebase/app'
import firestore from 'firebase/firestore'


const config = {
    apiKey: "AIzaSyA8tNThDQICMesf9RBhUsj5VVKjA2VjEEw",
    authDomain: "crud-udemy-e83b0.firebaseapp.com",
    databaseURL: "https://crud-udemy-e83b0.firebaseio.com",
    projectId: "crud-udemy-e83b0",
    storageBucket: "crud-udemy-e83b0.appspot.com",
    messagingSenderId: "667172507011",
    appId: "1:667172507011:web:378e6e8fd8eb38c932bab6",
    measurementId: "G-JCSXW9JJ27"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
firebase.analytics();
firebaseApp.firestore();
export default firebaseApp.firestore();

