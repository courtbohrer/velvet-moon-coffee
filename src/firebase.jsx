// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCeoCHtagZmw3z1XVWpUyab_4vmDJZ44RY',
  authDomain: 'velvet-moon-coffee.firebaseapp.com',
  projectId: 'velvet-moon-coffee',
  storageBucket: 'velvet-moon-coffee.appspot.com',
  messagingSenderId: '1021297187774',
  appId: '1:1021297187774:web:c45ef9af573aa8e147f7ef',
  measurementId: 'G-WGXN7CS7C4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
