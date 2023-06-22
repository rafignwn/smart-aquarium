import { FirebaseOptions, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCILr7cyadoETawLsU-Ky1pxddY0ofxTx4",
  authDomain: "smart-aquarium-6d27a.firebaseapp.com",
  databaseURL:
    "https://smart-aquarium-6d27a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-aquarium-6d27a",
  storageBucket: "smart-aquarium-6d27a.appspot.com",
  messagingSenderId: "446511096846",
  appId: "1:446511096846:web:49352db9ceb521f157c85f",
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const store = getFirestore(app);
