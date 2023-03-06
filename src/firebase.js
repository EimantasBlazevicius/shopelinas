import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBpP7M0ze251ECLu3PFOLaz64Ht4ycACa0",
  authDomain: "shopelinas-62423.firebaseapp.com",
  projectId: "shopelinas-62423",
  storageBucket: "shopelinas-62423.appspot.com",
  messagingSenderId: "212833090878",
  appId: "1:212833090878:web:553e2a619ea0030a12406f",
  measurementId: "G-RHDEPWBH57"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);