import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "../lib/context";
import { signOutAndReload } from "../lib/firebase";

/**
 * Navbar, duh (sign in sign out code imported from lib)
 * @param  {} props
 */
export default function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-white border-b">
      <MobileNavigation
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        user={user}
      />
      <DesktopNavigation user={user} />
    </nav>
  );
}

// Visible in desktop
const DesktopNavigation = ({ user }) => {
  return (
    <div className="w-full hidden md:flex flex-row justify-between items-center">
      {/* Left */}
      <div className="grow flex flex-row justify-start items-center">
        <Link href="/">
          <a className="h-12 px-8 flex flex-row items-center hover:bg-gray-100 active:underline">
            Home
          </a>
        </Link>

        {/* Show profile link if signed in */}
        {user && (
          <>
            <Link href={`/${user.uid}`}>
              <a className="h-12 px-8 flex flex-row items-center hover:bg-gray-100 active:underline">
                Me
              </a>
            </Link>
            <Link href={`/${user.uid}/closet`}>
              <a className="h-12 px-8 flex flex-row items-center hover:bg-gray-100 active:underline">
                Closet
              </a>
            </Link>
            <Link href={`/${user.uid}/outfits`}>
              <a className="h-12 px-8 flex flex-row items-center hover:bg-gray-100 active:underline">
                Outfits
              </a>
            </Link>
          </>
        )}
      </div>

      {/* Right */}
      {user ? (
        <button
          onClick={signOutAndReload}
          className="h-12 px-8 flex flex-row items-center hover:bg-gray-100 active:underline"
        >
          Sign Out
          <FontAwesomeIcon className="ml-2" icon={faArrowRightFromBracket} />
        </button>
      ) : (
        <Link href="/enter">
          <a className="h-12 px-8 flex flex-row items-center hover:bg-gray-100 active:underline">
            Sign In
            <FontAwesomeIcon className="ml-2" icon={faArrowRightToBracket} />
          </a>
        </Link>
      )}
    </div>
  );
};

// Visible in mobile
const MobileNavigation = ({ collapsed, setCollapsed, user }) => {
  return (
    <div className="md:hidden w-full flex flex-col justify-center items-stretch">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full h-12 text-center hover:bg-gray-50"
      >
        {collapsed ? (
          <FontAwesomeIcon
            icon={faBars}
            className="w-5 h-5 align-middle text-gray-700"
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className="w-5 h-5 align-middle text-gray-700"
          />
        )}
      </button>

      {/* Collapsible */}
      {!collapsed && (
        <>
          <Link href="/">
            <a className="h-12 px-4 flex flex-row items-center hover:bg-gray-100 active:underline">
              Home
            </a>
          </Link>

          {user && (
            <>
              <Link href={`/${user.uid}`}>
                <a className="h-12 px-4 flex flex-row items-center hover:bg-gray-100 active:underline">
                  Me
                </a>
              </Link>
              <Link href={`/${user.uid}/closet`}>
                <a className="h-12 px-4 flex flex-row items-center hover:bg-gray-100 active:underline">
                  Closet
                </a>
              </Link>
              <Link href={`/${user.uid}/outfits`}>
                <a className="h-12 px-4 flex flex-row items-center hover:bg-gray-100 active:underline">
                  Outfits
                </a>
              </Link>
            </>
          )}

          {/* Bottom */}
          {user ? (
            <button
              onClick={signOutAndReload}
              className="h-12 px-4 flex flex-row items-center border-t hover:bg-gray-100 active:underline"
            >
              Sign Out
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowRightFromBracket}
              />
            </button>
          ) : (
            <Link href="/enter">
              <a className="h-12 px-4 flex flex-row items-center border-t hover:bg-gray-100 active:underline">
                Sign In
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faArrowRightToBracket}
                />
              </a>
            </Link>
          )}
        </>
      )}
    </div>
  );
};
