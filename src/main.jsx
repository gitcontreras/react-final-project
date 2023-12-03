import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCihebozPTOY9Lq_5fh9eCtZWc4cQ5yqMI",
  authDomain: "finalprojectreact-49949.firebaseapp.com",
  projectId: "finalprojectreact-49949",
  storageBucket: "finalprojectreact-49949.appspot.com",
  messagingSenderId: "782582763212",
  appId: "1:782582763212:web:a14b53f2c6779ff12dbc69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
