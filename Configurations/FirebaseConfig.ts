// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQsANaBqGkAtwgJB4LL_DhAEunXFfl8b4",
  authDomain: "fir-auth-84883.firebaseapp.com",
  projectId: "fir-auth-84883",
  storageBucket: "fir-auth-84883.appspot.com",
  messagingSenderId: "862831016612",
  appId: "1:862831016612:web:6dd34f76f635016cf54431",
  measurementId: "G-M9KPJ6Q7QG"
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);