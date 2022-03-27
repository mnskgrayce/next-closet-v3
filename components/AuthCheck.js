import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

/**
 * Verify user context or link to Enter page
 * @param  {} props
 */
export default function AuthCheck(props) {
  const { user } = useContext(UserContext);

  return user
    ? props.children
    : props.fallback || (
        <div className="mx-auto my-8 px-4">
          <Link href="/enter">
            <p className="hover:underline text-center text-sm md:text-base lg:text-lg xl:text-xl">
              Please sign in to view this resource.
            </p>
          </Link>
        </div>
      );
}
