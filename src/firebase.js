import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDgz6_YgZuSf4xbOu08aeC8VqvFofMoZlM",
    authDomain: "clone-9bc77.firebaseapp.com",
    projectId: "clone-9bc77",
    storageBucket: "clone-9bc77.appspot.com",
    messagingSenderId: "53068268454",
    appId: "1:53068268454:web:1418eb2f85dfec43498567",
    measurementId: "G-H9MNB75MN1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth }