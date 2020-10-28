import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import { firebaseAuth } from '../utils/firebaseSetup';
import { addUser } from './users';

const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    const providerData = firebaseUser.providerData;
    for (let i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.idToken
      ) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
};

const onSignIn = (googleUser) => {
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  const unsubscribe = firebaseAuth.onAuthStateChanged(async (firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      const credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken
      );
      // Sign in with credential from the Google user.
      try {
        const result = await firebaseAuth.signInWithCredential(credential);
        if (result.additionalUserInfo.isNewUser) {
          const {
            uid,
            displayName,
            email,
            phoneNumber,
            photoURL,
          } = result.user;

          await addUser(uid, {
            displayName,
            email,
            phoneNumber,
            photoURL,
          });
        }
      } catch (error) {
        console.log('Auth Error', error);
        return error;
      }
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
};

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      // TODO add androidClientId
      // androidClientId: YOUR_CLIENT_ID_HERE,
      iosClientId:
        '969237576941-u4cudukn5i454bu4536839bl0hu0dg1h.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      onSignIn(result);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};
