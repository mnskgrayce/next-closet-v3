import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithGoogle } from "../lib/auth";

/**
 * A functional sign in component
 * @param  {} props
 */
export default function SignIn() {
  return (
    <div className="max-w-md mx-auto my-8 px-4">
      <button
        onClick={signInWithGoogle}
        className="w-full px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-800 text-white text-sm md:text-base lg:text-lg xl:text-xl"
      >
        <FontAwesomeIcon
          className="text-sm md:text-base lg:text-lg xl:text-xl mr-2"
          icon={faGoogle}
        />
        Sign in with Google
      </button>
    </div>
  );
}
