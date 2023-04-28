// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaeHWVBjavxb-bMOG76Koh9b5syMjEMno",
  authDomain: "clothing-app-4823d.firebaseapp.com",
  projectId: "clothing-app-4823d",
  storageBucket: "clothing-app-4823d.appspot.com",
  messagingSenderId: "842389541885",
  appId: "1:842389541885:web:4fb4dc5821d3fa553e3f94",
  measurementId: "G-NGVW9GPXQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {app,analytics}