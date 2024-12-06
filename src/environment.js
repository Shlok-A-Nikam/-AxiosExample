// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5z7f097AjNk1R1RugoXlLz5qif4TQX18",
  authDomain: "todoapplication-8e1cd.firebaseapp.com",
  projectId: "todoapplication-8e1cd",
  storageBucket: "todoapplication-8e1cd.firebasestorage.app",
  messagingSenderId: "40100041738",
  appId: "1:40100041738:web:373cc43a948f5f3251fbf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export default app;

export {auth, database};