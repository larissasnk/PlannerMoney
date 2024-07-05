import { initializeApp } from "firebase/app";
import { initializeAuth,createUserWithEmailAndPassword, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCRFMV83AL7YijtASVf4mJR-qw5cAhcoLY",
  authDomain: "plannermoney.firebaseapp.com",
  projectId: "plannermoney",
  storageBucket: "plannermoney.appspot.com",
  messagingSenderId: "585552802486",
  appId: "1:585552802486:web:39b0cf94de83728020ec17",
  measurementId: "G-2ZY2H2QJ79"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword};
