import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { auth, db } from "./firebase";

// Update existing item to Firestore (excluding photoURL)
export async function updateItem(data) {
  const itemRef = doc(db, "users", auth.currentUser.uid, "closet", data.id);

  updateDoc(itemRef, {
    name: data.name,
    brand: data.brand,
    type: data.type,
    description: data.description,
    timesUsed: data.timesUsed,
    updatedAt: serverTimestamp(),
  })
    .then(() => {
      toast.success("Item updated!");
    })
    .catch((error) => {
      console.log(error);
    });
}

// Upload new item to Firestore, then redirect to item
export async function addItem(data) {
  const collectionRef = collection(db, "users", auth.currentUser.uid, "closet");

  const newItem = {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  addDoc(collectionRef, newItem)
    .then((docRef) => {
      toast.success("New item added!");

      // Redirect
      window.location.href = `/${auth.currentUser.uid}/closet/${docRef.id}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Delete existing item off Firestore, then go back
// This does NOT delete sub-collections!
export async function deleteItem(data) {
  const itemRef = doc(db, "users", auth.currentUser.uid, "closet", data.id);

  deleteDoc(itemRef)
    .then(() => {
      toast.success("Item deleted!");

      // Redirect
      window.location.href = `/${auth.currentUser.uid}/closet`;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Convert item or outfit document to JSON with ID
/**
 * @param  {DocumentSnapshot} doc
 */
export function docToJSON(doc) {
  const data = doc.data();
  if (!data) return null;

  // Temporary timestamp to avoid null while updating item
  if (!data.createdAt) data.createdAt = Timestamp.now();
  if (!data.updatedAt) data.updatedAt = Timestamp.now();

  return {
    id: doc.id,
    ...data,
    // Gotcha! Firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
