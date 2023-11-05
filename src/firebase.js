// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW5ujlkQUFZk82hs35EtZy9hLjXOiQaZ4",
  authDomain: "every-1eca1.firebaseapp.com",
  databaseURL: "https://every-1eca1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "every-1eca1",
  storageBucket: "every-1eca1.appspot.com",
  messagingSenderId: "1043366747325",
  appId: "1:1043366747325:web:4f0723ea0a0954e76cabd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)