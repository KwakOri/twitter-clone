// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD3-_QmIa2UttoIjy9Pf5pbZRWqt5TMxo",
  authDomain: "nomad-coder-37e8c.firebaseapp.com",
  projectId: "nomad-coder-37e8c",
  storageBucket: "nomad-coder-37e8c.appspot.com",
  messagingSenderId: "819576646402",
  appId: "1:819576646402:web:e05027775b3a53e16f301b",
  measurementId: "G-G9MNE6260P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
