import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
// exporting this for getting this item in every component if i want i can give the  createContext()  value to null or giving a gap.
export const AuthContext = createContext(null);
//this is the way of googleAuthentication
const googleProvider = new GoogleAuthProvider();
//the parameter value is given children for making this provider a children element to get access to the other elements
const AuthProvider = ({ children }) => {
    //this is the main context for setting a user in state and getting access
  const [user, setUser] = useState(null);
  //when i reload the page the current info was gone so i used state because if i set it true then the data will be not be changed if i again give it false then the data will be changed
  const [loading, setLoading] = useState(true);

//if i don't want to use it multiple times then i have to use like this:
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current value of the current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
