// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import toast from "react-hot-toast";

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

// Sign in
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => {
      toast.success("You have signed in!");
    })
    .catch((error) => {
      toast.error(error.message);
    });
}

// Sign out
export async function signOutAndReload() {
  signOut(auth)
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      toast.error(error.message);
    });
}

// Convert item or outfit document to JSON with ID
export function docToJSON(doc) {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    // Gotcha! Firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
