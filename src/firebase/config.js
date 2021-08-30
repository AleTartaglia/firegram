import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1wzihledRBYNbQYELvoq72kcEhrMHwR0",
  authDomain: "firegram-ec1cc.firebaseapp.com",
  projectId: "firegram-ec1cc",
  storageBucket: "firegram-ec1cc.appspot.com",
  messagingSenderId: "71704827959",
  appId: "1:71704827959:web:fe3e04b2304da84c5a07b2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
