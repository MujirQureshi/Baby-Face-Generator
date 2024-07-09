import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB9SWStn-jgqsz3prxdaonAH6RCzfB0wq8",
  authDomain: "baby-image-generator.firebaseapp.com",
  projectId: "baby-image-generator",
  storageBucket: "baby-image-generator.appspot.com",
  messagingSenderId: "620545302496",
  appId: "1:620545302496:web:c40e3819a72712a7811585",
  measurementId: "G-2GDG229TFH"
};

export const app = initializeApp(firebaseConfig);