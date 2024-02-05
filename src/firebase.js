// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEUpIbQhlBZTycceddocT_Lpi0jrEhzvU",
  authDomain: "cm-realstate-dev.firebaseapp.com",
  projectId: "cm-realstate-dev",
  storageBucket: "cm-realstate-dev.appspot.com",
  messagingSenderId: "656425625394",
  appId: "1:656425625394:web:6c91fe91850015409d192b",
  measurementId: "G-Y82T8L76DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();