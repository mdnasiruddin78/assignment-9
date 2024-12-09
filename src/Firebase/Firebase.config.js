// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZXt_rD2GMCPXJJElvN86XZyjH8dQcuW0",
  authDomain: "assignment-09-81f49.firebaseapp.com",
  projectId: "assignment-09-81f49",
  storageBucket: "assignment-09-81f49.firebasestorage.app",
  messagingSenderId: "693197086788",
  appId: "1:693197086788:web:807a901afb6046784f1c11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);