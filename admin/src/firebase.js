// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDplT5lWyRgvNwnDPBZ_ES_QSOFZt3glYE",
  authDomain: "shop-d06cd.firebaseapp.com",
  projectId: "shop-d06cd",
  storageBucket: "shop-d06cd.appspot.com",
  messagingSenderId: "1098481517486",
  appId: "1:1098481517486:web:45d1550067165afb897e3f",
  measurementId: "G-LGYVGJ019J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;