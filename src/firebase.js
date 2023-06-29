import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIE6A5dTNNiCs2jvbOKmTsT27onzXpCms",
  authDomain: "photofolio-603da.firebaseapp.com",
  projectId: "photofolio-603da",
  storageBucket: "photofolio-603da.appspot.com",
  messagingSenderId: "700217801989",
  appId: "1:700217801989:web:52ac51f2fbcbc9dd0a8b6c",
  measurementId: "G-SPH1HV5V8T",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const firestore = firebase.firestore();
