// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurationc:\Full_stack_webdevelopment_projects\react-book-review\dist\index.html
const firebaseConfig = {
  apiKey: "AIzaSyB10g1bwukg0xM5aq9IBtZfIzJkaDaAX0s",
  authDomain: "simple-firebase-6ee2a.firebaseapp.com",
  projectId: "simple-firebase-6ee2a",
  storageBucket: "simple-firebase-6ee2a.firebasestorage.app",
  messagingSenderId: "1071823311583",
  appId: "1:1071823311583:web:1c7e36438ad1e423540f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;