
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs5qWvBGCluXc4fi20plk7VOtkDcPmTy8",
  authDomain: "reactcoder1-22.firebaseapp.com",
  projectId: "reactcoder1-22",
  storageBucket: "reactcoder1-22.appspot.com",
  messagingSenderId: "641459187266",
  appId: "1:641459187266:web:01a9c790f54491005a07db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);