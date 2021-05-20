import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDNvXhDDOyRhXPBVi9F29LZDWixWyIaMIU",
  authDomain: "clone-e51dd.firebaseapp.com",
  projectId: "clone-e51dd",
  storageBucket: "clone-e51dd.appspot.com",
  messagingSenderId: "925724832642",
  appId: "1:925724832642:web:8a6b010a6a8458b6b3d59b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };