import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyB8YZaD-kl6hnZwX9VRQiTv810OdTxWqxA",
    authDomain: "yawn-killer.firebaseapp.com",
    databaseURL: "https://yawn-killer.firebaseio.com",
    projectId: "yawn-killer",
    storageBucket: "yawn-killer.appspot.com",
    messagingSenderId: "677148586434"
  };

const firebaseApp = firebase.initializeApp(config);
export const database = firebaseApp.database();
export const auth = firebaseApp.auth;
export const storageKey = 'KEY_FOR_LOCAL_STORAGE';
export const isAuthenticated = () => {
    return !!auth.currentUser || !!localStorage.getItem(storageKey);
}