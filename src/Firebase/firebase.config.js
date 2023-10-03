// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNFPwOm5wIMERUsNALIE_Pavxqmv9y0Sc",
  authDomain: "milestone-nine-project.firebaseapp.com",
  projectId: "milestone-nine-project",
  storageBucket: "milestone-nine-project.appspot.com",
  messagingSenderId: "968526172462",
  appId: "1:968526172462:web:7bf30f3b321f271727aabf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;