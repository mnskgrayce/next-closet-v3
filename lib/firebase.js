// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPq8TIUi_0z2H6rllAO11zDXMpyOmzAcI",
  authDomain: "next-closet-v3.firebaseapp.com",
  projectId: "next-closet-v3",
  storageBucket: "next-closet-v3.appspot.com",
  messagingSenderId: "896468185548",
  appId: "1:896468185548:web:e7fde8099a6686d136ed69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
