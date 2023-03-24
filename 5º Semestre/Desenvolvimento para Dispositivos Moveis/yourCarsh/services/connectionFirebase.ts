import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export const firebaseConfig = {
  apiKey: "AIzaSyDAuSwReXPvWQdsNCN1QZ5Og1oqWqj9HMs",
  authDomain: "aula-boer.firebaseapp.com",
  projectId: "aula-boer",
  storageBucket: "aula-boer.appspot.com",
  messagingSenderId: "567979686981",
  appId: "1:567979686981:web:fe9b9154438a6e33e4b72c"
};



export const app = initializeApp(firebaseConfig);