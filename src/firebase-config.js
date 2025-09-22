// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHN2AwrT40gvv6gz-a_6vbM_GWktNPcm4",
  authDomain: "chamber-e7b9c.firebaseapp.com",
  projectId: "chamber-e7b9c",
  storageBucket: "chamber-e7b9c.firebasestorage.app",
  messagingSenderId: "1073774865725",
  appId: "1:1073774865725:web:4b3db1a19ab8612fbee954"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider =new GoogleAuthProvider();
export const db =getFirestore(app)