// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRTPNg2ADYBUUgGpnKQRzx3UGNJb_gI-o",
  authDomain: "footy-admin-photos.firebaseapp.com",
  projectId: "footy-admin-photos",
  storageBucket: "footy-admin-photos.appspot.com",
  messagingSenderId: "579802727200",
  appId: "1:579802727200:web:c2c09b8d84d32761700d45",
  measurementId: "G-N8VE73T0P4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
