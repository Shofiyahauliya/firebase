// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQLzZHoH2JSn1vEWufl0acjrkGohsBtdE",
  authDomain: "fir-211de.firebaseapp.com",
  databaseURL: "https://fir-211de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-211de",
  storageBucket: "fir-211de.appspot.com",
  messagingSenderId: "270601916854",
  appId: "1:270601916854:web:fd75aafee3e1afd3a37117",
  measurementId: "G-C8RDL2S1BZ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig);

export default cong;