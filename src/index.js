import './styles.scss';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfNfRaVwNABRl1FHWIb-sSdoQ0g0kztW8",
  authDomain: "thisifun.firebaseapp.com",
  projectId: "thisifun",
  storageBucket: "thisifun.appspot.com",
  messagingSenderId: "96396108778",
  appId: "1:96396108778:web:1208f7a1651fdcb79e0893",
  measurementId: "G-TSEDRMP7SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);