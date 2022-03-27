import { Toaster } from "react-hot-toast";
import Navbar from "../components/NavBar";
import { UserContext } from "../lib/context";
import { useUser } from "../lib/hooks";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const user = useUser();

  return (
    <UserContext.Provider value={user}>
      <Navbar />
      <Component {...pageProps} />
      <div>
        <Toaster />
      </div>
    </UserContext.Provider>
  );
}

export default MyApp;
