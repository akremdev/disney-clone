import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBJqORRXAcY_uLTdSddodUUC7j-ClwFAHc",
    authDomain: "disneyplus-1ef01.firebaseapp.com",
    projectId: "disneyplus-1ef01",
    storageBucket: "disneyplus-1ef01.appspot.com",
    messagingSenderId: "260760569541",
    appId: "1:260760569541:web:d15dc6e417876e5e7612ac",
    measurementId: "G-FZVC1PRZPD"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;