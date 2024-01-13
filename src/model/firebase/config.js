// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl4-QqV8EU5PO34jMGrT0Q1u4t6QN7Dsw",
  authDomain: "senecahackathonregistration.firebaseapp.com",
  projectId: "senecahackathonregistration",
  storageBucket: "senecahackathonregistration.appspot.com",
  messagingSenderId: "17328393836",
  appId: "1:17328393836:web:2e4dba9eea78cf90221249",
  measurementId: "G-5QWBY15E71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
