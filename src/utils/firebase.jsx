// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, analytics };
