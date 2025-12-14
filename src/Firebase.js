// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRSNxhbAmEcnFWBDF9VtzYbA1V0FmRjx0",
  authDomain: "sachinmahajan-cbcce.firebaseapp.com",
  databaseURL: "https://sachinmahajan-cbcce-default-rtdb.firebaseio.com",
  projectId: "sachinmahajan-cbcce",
  storageBucket: "sachinmahajan-cbcce.firebasestorage.app",
  messagingSenderId: "146261052015",
  appId: "1:146261052015:web:7f95bbc92e6c36a5f65b9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);