import { signInWithGoogleAsync } from '../services/auth';

export const signInWithGoogle = async () => {
  try {
    await signInWithGoogleAsync();
  } catch (error) {
    console.log('Sign In With Google Error', error);
  }
};
