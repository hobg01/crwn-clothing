import firebase from 'firebase/app';

import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyDjGAwLmt5TcmtKZOly2t74q0QMPc0ROyI",
    authDomain: "crwn-db-7538b.firebaseapp.com",
    projectId: "crwn-db-7538b",
    storageBucket: "crwn-db-7538b.appspot.com",
    messagingSenderId: "681774374785",
    appId: "1:681774374785:web:dac1c94f8af81cc69f9280",
    measurementId: "G-ZWVYSNDEH5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;