// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-YHh8xZTkgN5AFNDNVn6CqpIfh1_HTFM",
  authDomain: "postingmedia-288eb.firebaseapp.com",
  projectId: "postingmedia-288eb",
  storageBucket: "postingmedia-288eb.appspot.com",
  messagingSenderId: "151489834829",
  appId: "1:151489834829:web:90c3041e701420875b5104",
  measurementId: "G-8WZV9C5PLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);