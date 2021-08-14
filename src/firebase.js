import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAB6SOB2_DTTr-3r6qAHJdPe7pFHAmEteo",

  authDomain: "connect-c65eb.firebaseapp.com",

  projectId: "connect-c65eb",

  storageBucket: "connect-c65eb.appspot.com",

  messagingSenderId: "670647710662",

  appId: "1:670647710662:web:372ed43e315b391ab838c7",

  measurementId: "G-1DJGSPMKC8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
