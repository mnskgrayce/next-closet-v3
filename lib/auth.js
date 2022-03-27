import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import toast from "react-hot-toast";

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

export async function signOutAndReload() {
  signOut(auth)
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      toast.error(error.message);
    });
}
