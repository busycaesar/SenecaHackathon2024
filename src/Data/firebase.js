// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL5T6ZEUFJvvh94RxKq6SOUEw-LS8jWFA",
  authDomain: "senecahackathonwebsite.firebaseapp.com",
  databaseURL: "https://senecahackathonwebsite-default-rtdb.firebaseio.com",
  projectId: "senecahackathonwebsite",
  storageBucket: "senecahackathonwebsite.appspot.com",
  messagingSenderId: "582800150728",
  appId: "1:582800150728:web:6e13a5b74f7055628d15fd",
  measurementId: "G-DWWXP6S3EJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
