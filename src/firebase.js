import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDEUHddqs4E7AIfdiSwq3tQCJfPK4ZrjqE",
  authDomain: "messenger-d3871.firebaseapp.com",
  projectId: "messenger-d3871",
  storageBucket: "messenger-d3871.appspot.com",
  messagingSenderId: "844800810287",
  appId: "1:844800810287:web:633ab0d570d251fab9d5da",
  measurementId: "G-RGH3C61P4L"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)