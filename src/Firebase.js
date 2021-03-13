// For Firebase JS SDK v7.20.0 and later, measurementId is optiona
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD4VVniVKA6baR9SobVrQu6cJbdQcVN_Bw",
  authDomain: "facebook-clone-b9787.firebaseapp.com",
  projectId: "facebook-clone-b9787",
  storageBucket: "facebook-clone-b9787.appspot.com",
  messagingSenderId: "636448174214",
  appId: "1:636448174214:web:b46b148b45021f846aa107",
  measurementId: "G-D4WNVDR050"
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider()
export { auth, provider };
export default db;