import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAH7acFmzcvIUN7I7PoeSgqTPT14k_RGYQ",
    authDomain: "reventscourse-50ef1.firebaseapp.com",
    projectId: "reventscourse-50ef1",
    storageBucket: "reventscourse-50ef1.appspot.com",
    messagingSenderId: "826408559842",
    appId: "1:826408559842:web:e40f0cf98083de15f5eabb"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;