import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGuRsYp84mcZNDDl3d6XHAzQFwUml6b9M",
  authDomain: "joindemo-f501a.firebaseapp.com",
  projectId: "joindemo-f501a",
  storageBucket: "joindemo-f501a.appspot.com",
  messagingSenderId: "534707199960",
  appId: "1:534707199960:web:701ab5242caa8907ab5cad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
