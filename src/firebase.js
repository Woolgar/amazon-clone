// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB5yTdpR1c3EAmVFwE5csf7TJmBbr3RzWM",
    authDomain: "fir-32983.firebaseapp.com",
    databaseURL: "https://fir-32983.firebaseio.com",
    projectId: "fir-32983",
    storageBucket: "fir-32983.appspot.com",
    messagingSenderId: "640404716912",
    appId: "1:640404716912:web:e836d336e8c8427d4ca3b5",
    measurementId: "G-7VWS5MKQGB"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth};