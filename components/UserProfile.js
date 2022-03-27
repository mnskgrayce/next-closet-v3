import { useContext } from "react";
import { UserContext } from "../lib/context";
import Loading from "./Loading";

/**
 * Display the current logged in user
 * @param  {} props
 */
export default function UserProfile() {
  const { user } = useContext(UserContext);

  return user ? (
    <div className="flex flex-col justify-center items-center px-4 py-4 md:py-6 lg:py-8">
      <img
        className="rounded-full object-cover h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36 border-2"
        src={user.photoURL || "https://picsum.photos/128"}
      />
      <p className="text-base md:text-lg lg:text-xl font-bold mt-2 md:mt-3 lg:mt-4">
        {user.displayName}
      </p>
      <p className="text-xs md:text-sm lg:text-base italic tracking-wide">
        {user.email}
      </p>
    </div>
  ) : (
    <Loading />
  );
}
