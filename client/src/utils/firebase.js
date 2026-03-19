
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-a9612.firebaseapp.com",
  projectId: "authexamnotes-a9612",
  storageBucket: "authexamnotes-a9612.firebasestorage.app",
  messagingSenderId: "160078069618",
  appId: "1:160078069618:web:2337a321dba729577327eb"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}