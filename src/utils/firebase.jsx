// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  sign,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHEoxkL9OfW82b0cBq97hInAakx_0PoKo",
  authDomain: "neon-login-form.firebaseapp.com",
  projectId: "neon-login-form",
  storageBucket: "neon-login-form.appspot.com",
  messagingSenderId: "264838186088",
  appId: "1:264838186088:web:724658b99d03fb4835a7dd",
  measurementId: "G-PTV3BNMV94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
