import moment from "moment";
import AuthCheck from "../../../components/AuthCheck";
import ItemForm from "../../../components/ItemForm";

export default function NewItemPage() {
  const now = moment();

  // JSON serializable template
  const item = {
    name: "New Item",
    brand: "N/A",
    type: "Other",
    description: "",
    timesUsed: 0,
    photoURL: null,
    createdAt: now.valueOf(),
    updatedAt: now.valueOf(),
  };

  return (
    <>
      <AuthCheck>
        <ItemForm item={item} />;
      </AuthCheck>
    </>
  );
}
