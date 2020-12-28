import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVdQ19qItzVjq7Z09G_TL7ejey1fUB-N0",
    authDomain: "crwn-db-3b2f8.firebaseapp.com",
    projectId: "crwn-db-3b2f8",
    storageBucket: "crwn-db-3b2f8.appspot.com",
    messagingSenderId: "1087520754076",
    appId: "1:1087520754076:web:9eccde3c70ff073e006059",
    measurementId: "G-6KB2XNBZ9B"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 