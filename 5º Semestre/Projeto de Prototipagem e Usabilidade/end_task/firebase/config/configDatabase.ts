import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";



const firebaseConfig  = {
    apiKey: "AIzaSyDAuSwReXPvWQdsNCN1QZ5Og1oqWqj9HMs",
    authDomain: "aula-boer.firebaseapp.com",
    projectId: "aula-boer",
    storageBucket: "aula-boer.appspot.com",
    messagingSenderId: "567979686981",
    appId: "1:567979686981:web:fe9b9154438a6e33e4b72c"
};



export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);