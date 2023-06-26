import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8P0spqXARfVx64BzPjL3I3WSttM1ZyoU",
  authDomain: "krishna-portfolio-react.firebaseapp.com",
  projectId: "krishna-portfolio-react",
  storageBucket: "krishna-portfolio-react.appspot.com",
  messagingSenderId: "1025523147900",
  appId: "1:1025523147900:web:ccaf1c8d91f6c297b5d5f9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();