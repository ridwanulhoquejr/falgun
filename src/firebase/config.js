import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, getDocs } from 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDP0GKZ2gtA8VBISGEurJKvfbwaG7a7zu8',
  authDomain: 'falgun-656a8.firebaseapp.com',
  projectId: 'falgun-656a8',
  storageBucket: 'falgun-656a8.appspot.com',
  messagingSenderId: '265357891612',
  appId: '1:265357891612:web:39c94541e017724b2027d9',
  measurementId: 'G-7ZHVM55005',
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
