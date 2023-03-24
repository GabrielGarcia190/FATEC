import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAuSwReXPvWQdsNCN1QZ5Og1oqWqj9HMs",
  authDomain: "aula-boer.firebaseapp.com",
  projectId: "aula-boer",
  storageBucket: "aula-boer.appspot.com",
  messagingSenderId: "567979686981",
  appId: "1:567979686981:web:fe9b9154438a6e33e4b72c"
};



if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;