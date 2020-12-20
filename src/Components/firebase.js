import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHVftnXQ2ZB6U0DH4v8sJpySeMX_ER-n4",
    authDomain: "discord-kevinjacob.firebaseapp.com",
    projectId: "discord-kevinjacob",
    storageBucket: "discord-kevinjacob.appspot.com",
    messagingSenderId: "897941778097",
    appId: "1:897941778097:web:65879c6b14be414cb9bc90",
    measurementId: "G-3FCEDCQQ89"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};

  export default db;