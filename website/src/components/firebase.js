// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAECSVk1UiljIhVshws9gAROjmXBgRePKY",
  authDomain: "pollution-monitoring-6c325.firebaseapp.com",
  databaseURL: "https://pollution-monitoring-6c325-default-rtdb.firebaseio.com",
  projectId: "pollution-monitoring-6c325",
  storageBucket: "pollution-monitoring-6c325.appspot.com",
  messagingSenderId: "1004634672091",
  appId: "1:1004634672091:web:6228f85cb4eaa1472df5fe",
  measurementId: "G-8CZJF72WG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};