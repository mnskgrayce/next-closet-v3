import { collection, orderBy } from "firebase/firestore";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import AuthCheck from "../../../components/AuthCheck";
import ItemCardGrid from "../../../components/ItemCardGrid";
import Loading from "../../../components/Loading";
import { db, docToJSON } from "../../../lib/firebase";

export default function ClosetPage() {
  return (
    <>
      <AuthCheck>
        <ItemsManager />
      </AuthCheck>
    </>
  );
}

// Fetch and display items from Firestore
const ItemsManager = () => {
  const router = useRouter();
  const uid = router.query.uid;

  const [value, loading, error] = useCollection(
    collection(db, "users", uid, "closet"),
    orderBy("updatedAt", "desc")
  );
  const items = value?.docs.map(docToJSON);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return <ItemCardGrid items={items} />;
};
