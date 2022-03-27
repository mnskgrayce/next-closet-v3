import Link from "next/link";
import { useContext } from "react";
import SignIn from "../components/SignIn";
import { UserContext } from "../lib/context";

export default function EnterPage() {
  const { user } = useContext(UserContext);

  return (
    <main>
      {!user ? (
        <SignIn />
      ) : (
        <div className="mx-auto my-8 px-4">
          <Link href={`/${user.uid}`}>
            <p className="hover:underline text-center text-sm md:text-base lg:text-lg xl:text-xl">
              Welcome, <strong>{user.displayName}</strong>
            </p>
          </Link>
        </div>
      )}
    </main>
  );
}
