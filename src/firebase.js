import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBozBJDhErsze0IJgygOky2hplt-rhhlB8",
    authDomain: "panier-achat-fsj.firebaseapp.com",
    databaseURL: "https://panier-achat-fsj-default-rtdb.firebaseio.com",
    projectId: "panier-achat-fsj",
    storageBucket: "panier-achat-fsj.appspot.com",
    messagingSenderId: "827452650180",
    appId: "1:827452650180:web:5c5b23c09797275b844f91",
    measurementId: "G-JW7FYC4WJN"
  };

// Initialiser firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const instanceFirestore = firebase.firestore();