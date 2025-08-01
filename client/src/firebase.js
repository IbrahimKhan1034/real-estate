// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "real-estate-7c30c.firebaseapp.com",
    projectId: "real-estate-7c30c",
    storageBucket: "real-estate-7c30c.firebasestorage.app",
    messagingSenderId: "373746060836",
    appId: "1:373746060836:web:d374e1d5316034149512b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);