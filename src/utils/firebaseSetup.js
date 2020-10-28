import firebase from 'firebase';
import 'firebase/firestore';
import * as firebaseCore from 'expo-firebase-core';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCore.DEFAULT_APP_OPTIONS);
}

export const firebaseStorage = firebase.storage().ref();
export const firebaseDB = firebase.database();
export const firebaseAuth = firebase.auth();
export const firestoreDB = firebase.firestore();
