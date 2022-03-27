import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";

export function useUser() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    // Turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = doc(db, "users", user.uid);

      // Add user to database if not exist
      unsubscribe = onSnapshot(ref, (doc) => {
        if (!doc.exists()) {
          setDoc(ref, {
            photoURL: user.photoURL,
            displayName: user.displayName,
          });
        }
      });
    } else {
      console.log("User is not logged in!");
    }

    return unsubscribe;
  }, [user]);

  return { user };
}
