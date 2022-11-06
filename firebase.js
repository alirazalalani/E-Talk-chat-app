import firebase from "firebase";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG58BUrqFKKrtVEmd4prBaTSQzo7b-vfI",
  authDomain: "messages-app-6d04d.firebaseapp.com",
  projectId: "messages-app-6d04d",
  storageBucket: "messages-app-6d04d.appspot.com",
  messagingSenderId: "870100405745",
  appId: "1:870100405745:web:043bc869c0ae8754888850",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
