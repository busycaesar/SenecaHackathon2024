// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import config from "./fb-config";

// Initialize Firebase
const app = initializeApp(config);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const participantCollection = collection(db, "Participants");

export { db, participantCollection, analytics };
export const auth = getAuth(app);
