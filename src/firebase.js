import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"
import "firebase/functions"


firebase.initializeApp({
    apiKey: "AIzaSyBEDbbHSw6rOooIqE-uIyP2ADPtsYdHaTY",
    authDomain: "weight-tracker-735c3.firebaseapp.com",
    databaseURL: "https://weight-tracker-735c3-default-rtdb.firebaseio.com",
    projectId: "weight-tracker-735c3",
    storageBucket: "weight-tracker-735c3.appspot.com",
    messagingSenderId: "1070858303134",
    appId: "1:1070858303134:web:b33a7c5e877229aac66d8f"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
