import { doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";
import AuthCheck from "../../../components/AuthCheck";
import ItemForm from "../../../components/ItemForm";
import Loading from "../../../components/Loading";
import { docToJSON } from "../../../lib/api";
import { auth, db } from "../../../lib/firebase";

export default function ItemPage() {
  return (
    <>
      <AuthCheck>
        <ItemManager />
      </AuthCheck>
    </>
  );
}

// Fetch and display items from Firestore
const ItemManager = () => {
  const router = useRouter();
  const id = router.query.id;

  const ref = doc(db, "users", auth.currentUser.uid, "closet", id);
  const [value, loading, error] = useDocument(ref);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const item = docToJSON(value);
  return <ItemForm item={item} />;
};
