import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Loader from "../components/Loader";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          isLogin: true,
          userInfo: {
            email: user.email,
            photoUrl: user.photoURL,
            name: user.displayName,
          },
        });
        console.log("auth user", user);
      } else {
        setUser({
          isLogin: false,
          userInfo: {},
        });
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
