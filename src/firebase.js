import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcJB7wrBlLx7lPrPxG00JZqM1bBEQvXEM",
  authDomain: "photofolio-d4f3f.firebaseapp.com",
  projectId: "photofolio-d4f3f",
  storageBucket: "photofolio-d4f3f.appspot.com",
  messagingSenderId: "741535191397",
  appId: "1:741535191397:web:5bd98c865c8b279335118c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const firestore = firebase.firestore();