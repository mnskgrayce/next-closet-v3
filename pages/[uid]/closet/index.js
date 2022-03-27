import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, orderBy } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import AuthCheck from "../../../components/AuthCheck";
import ItemCardGrid from "../../../components/ItemCardGrid";
import Loading from "../../../components/Loading";
import { docToJSON } from "../../../lib/api";
import { db } from "../../../lib/firebase";

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

  return (
    <>
      <Link
        href={{
          pathname: `${router.pathname}/new`,
          query: {
            uid: router.query.uid,
          },
        }}
      >
        <div className="m-4">
          <NewItemButton />
        </div>
      </Link>
      <ItemCardGrid items={items} />
    </>
  );
};

const NewItemButton = () => {
  return (
    <button className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-800 text-white text-center">
      New Item
      <FontAwesomeIcon icon={faPlus} className="ml-2" />
    </button>
  );
};
