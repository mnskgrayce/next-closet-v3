import AuthCheck from "../../components/AuthCheck";
import UserProfile from "../../components/UserProfile";

export default function UserPage() {
  return (
    <>
      <AuthCheck>
        <UserProfile />
      </AuthCheck>
    </>
  );
}
