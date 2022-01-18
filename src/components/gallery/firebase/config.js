import firebase from "firebase/app";
// import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// var firebaseConfig = {
//   apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
//   authDomain: "the-net-ninja-sandbox.firebaseapp.com",
//   databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
//   projectId: "the-net-ninja-sandbox",
//   storageBucket: "the-net-ninja-sandbox.appspot.com",
//   messagingSenderId: "485942827092",
//   appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCc2XArpvjtmlwETQkwoHSyXZqvOVUqKJY",
//   authDomain: "arvindtenthouse-v1.firebaseapp.com",
//   databaseURL: "https://arvindtenthouse-v1-default-rtdb.firebaseio.com",
//   projectId: "arvindtenthouse-v1",
//   storageBucket: "arvindtenthouse-v1.appspot.com",
//   messagingSenderId: "72129842389",
//   appId: "1:72129842389:web:ab14ba1ff819a9bdf1a65c",
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAMA3rxCLJcVrffnoc4TKs4K201sHj-8z0",
  authDomain: "bioproject-v1.firebaseapp.com",
  databaseURL: "https://bioproject-v1-default-rtdb.firebaseio.com",
  projectId: "bioproject-v1",
  storageBucket: "bioproject-v1.appspot.com",
  messagingSenderId: "899912532375",
  appId: "1:899912532375:web:47f212bf30041d060b84d2",
  measurementId: "G-LTSC5J8C2N",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
