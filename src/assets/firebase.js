import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAW797B2aM7PgLp5J_dIFm2Q1Z0ts5xgJc",
  authDomain: "fsmx-app.firebaseapp.com",
  projectId: "fsmx-app",
  storageBucket: "fsmx-app.appspot.com",
  messagingSenderId: "244693470283",
  appId: "1:244693470283:web:ddf6b985528c5d8f8791ce"
};
// Initialize Firebase

const firebaseConn = firebase.initializeApp(firebaseConfig);

export const auth = firebaseConn.auth();
export const firestore = firebase.firestore();
export default firebaseConn;











