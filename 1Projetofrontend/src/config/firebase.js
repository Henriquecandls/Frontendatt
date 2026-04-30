import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPkUZa6vl7P0JuCrmCPGSBuJb4LFZTKjQ",
  authDomain: "frontendprojeto1-7eead.firebaseapp.com",
  projectId: "frontendprojeto1-7eead",
  storageBucket: "frontendprojeto1-7eead.firebasestorage.app",
  messagingSenderId: "3326246179",
  appId: "1:3326246179:web:46cb75c7935dc8acdc6096"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
