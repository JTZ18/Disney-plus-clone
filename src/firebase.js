import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-jQZf1KCG3Wgr7_kf06cwfhm1bl_Kj8M",
  authDomain: "disney-plus-clone-c3c6b.firebaseapp.com",
  projectId: "disney-plus-clone-c3c6b",
  storageBucket: "disney-plus-clone-c3c6b.appspot.com",
  messagingSenderId: "6672829623",
  appId: "1:6672829623:web:d2f9b1c5cc5fb255b3d132",
  measurementId: "G-BEF0CGCB65"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
