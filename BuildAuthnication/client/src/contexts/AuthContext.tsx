import { useState, useEffect, createContext, useContext } from "react";
import { updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import auth from "../../fireBaseConfig";

const AuthContext = createContext("null");

export function useAuth() {
  return useContext(AuthContext);
}

function updateUserProfile(user: any, profile: any) {
  return updateProfile(user, profile);
}

function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function logout() {
    return signOut(auth);
  }

  function register(email: any, password: any) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    register,
    error,
    setError,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
