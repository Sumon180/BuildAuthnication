import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj5dQn9oNUb4X31at3p4jay70ohzCNS6E",
  authDomain: "react-crud-37608.firebaseapp.com",
  projectId: "react-crud-37608",
  storageBucket: "react-crud-37608.appspot.com",
  messagingSenderId: "173181242681",
  appId: "1:173181242681:web:915712e74dfeecb1b8ece8",
  measurementId: "G-0VXQJEX4HY",
};

const app = initializeApp(firebaseConfig);

// gives us an auth instance
const auth = getAuth(app);

// in order to use this auth instance elsewhere
export default auth;
