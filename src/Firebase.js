// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDDO6BOILoYNF9RP8_NE66K6pDNSp2Bvrc",
    authDomain: "twitter-clone-38274.firebaseapp.com",
    projectId: "twitter-clone-38274",
    storageBucket: "twitter-clone-38274.appspot.com",
    messagingSenderId: "312132695906",
    appId: "1:312132695906:web:c9eee4261eb4dcc2d05e3b",
    measurementId: "G-R81706QCRE"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  export default db;