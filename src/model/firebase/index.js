import { doc, onSnapShot } from "firebase/firestore";
import { db } from "./config";

export const getRealtimeData = () => {
  try {
    const data = onSnapShot(doc(db, "Participants"), (doc) => {
      console.log("Current data: ", doc.data());
    });
    if (data) {
      return data;
    } else {
      console.log("No data found");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
