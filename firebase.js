// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZDeYniKeJTxzJie88RmMJ-0RoCZlG2RI",
  authDomain: "torpedo-6f03f.firebaseapp.com",
  projectId: "torpedo-6f03f",
  storageBucket: "torpedo-6f03f.appspot.com",
  messagingSenderId: "186379476126",
  appId: "1:186379476126:web:c43ec01b5f3a2e34506f8f",
  measurementId: "G-95PQH9D2YM",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
