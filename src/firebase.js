import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6R15C1s789V457jyIFC3NT96Po5V_pfg",
  authDomain: "upex-city-travellers.firebaseapp.com",
  projectId: "upex-city-travellers",
  storageBucket: "upex-city-travellers.appspot.com",
  messagingSenderId: "770397916402",
  appId: "1:770397916402:web:45fd60886c42f9c2be546b",

  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
