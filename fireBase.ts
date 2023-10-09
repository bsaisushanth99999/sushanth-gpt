import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpK_yY-UQLu-zfxJpdiAdbX1bUfzy5bHA",
  authDomain: "sushanth-gpt.firebaseapp.com",
  projectId: "sushanth-gpt",
  storageBucket: "sushanth-gpt.appspot.com",
  messagingSenderId: "777389430598",
  appId: "1:777389430598:web:f97aadeebe6a71684a3747",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
