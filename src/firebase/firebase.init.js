// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEFSKlG8-diC0Tr3_QaobefozH4BJmTUI",
  authDomain: "dragon-news-project-f78c6.firebaseapp.com",
  projectId: "dragon-news-project-f78c6",
  storageBucket: "dragon-news-project-f78c6.firebasestorage.app",
  messagingSenderId: "642728085833",
  appId: "1:642728085833:web:d3ef96e9c1388e03d1b298"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);