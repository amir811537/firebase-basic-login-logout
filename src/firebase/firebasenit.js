// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOR1MqMCbuJIMDbyXWnwbQ0837L1voZ-o",
  authDomain: "my-simple-firebase-proje-afe25.firebaseapp.com",
  projectId: "my-simple-firebase-proje-afe25",
  storageBucket: "my-simple-firebase-proje-afe25.appspot.com",
  messagingSenderId: "694672256417",
  appId: "1:694672256417:web:5b25dcd637b1b21039efe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;