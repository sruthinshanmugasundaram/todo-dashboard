import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCTFNoBx0nnsVXHJCz7TOrDRkWMJxTMKeU",
  authDomain: "netflix-project-c24b8.firebaseapp.com",
  projectId: "netflix-project-c24b8",
  storageBucket: "netflix-project-c24b8.appspot.com",
  messagingSenderId: "336251175795",
  appId: "1:336251175795:web:cd125ce21e10adb006fb06",
  measurementId: "G-6YS41ZRCD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)