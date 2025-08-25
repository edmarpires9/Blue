// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChwzhQmERyX4G6h2jdNEXgA-BqllPfDkY",
  authDomain: "bluenetwork-877df.firebaseapp.com",
  projectId: "bluenetwork-877df",
  storageBucket: "bluenetwork-877df.firebasestorage.app",
  messagingSenderId: "100581189592",
  appId: "1:100581189592:web:1de66cf533fca3ae1e74ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
