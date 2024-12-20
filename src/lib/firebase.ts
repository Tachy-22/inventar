// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const storage = getStorage(app);
export const db = getFirestore(app);
