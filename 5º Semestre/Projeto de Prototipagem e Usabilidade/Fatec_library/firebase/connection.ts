import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-jylEJKCkh8O6RuWdZpKwKs6r7-alEvo",
  authDomain: "fatec-library.firebaseapp.com",
  projectId: "fatec-library",
  storageBucket: "fatec-library.appspot.com",
  messagingSenderId: "936291077411",
  appId: "1:936291077411:web:102c4989f43b1080ce9096"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);