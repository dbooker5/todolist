import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp ({
   apiKey: "AIzaSyDvKhM6FFVV5miKPNsloBloEB4uHI28IWk",
  authDomain: "todolist-7f6f3.firebaseapp.com",
  databaseURL: "https://todolist-7f6f3-default-rtdb.firebaseio.com",
  projectId: "todolist-7f6f3",
  storageBucket: "todolist-7f6f3.firebasestorage.app",
  messagingSenderId: "945185918508",
  appId: "1:945185918508:web:e1fbf1a6cbe1600be90b89"
});
export {firebaseConfig as firebase};