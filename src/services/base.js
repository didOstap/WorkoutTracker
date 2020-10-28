import { firestoreDB } from '../utils/firebaseSetup';
import {
  EXERCISES_COLLECTION,
  USERS_COLLECTION,
} from '../constants/firestoreCollections';

export const usersCollection = firestoreDB.collection(USERS_COLLECTION);
export const exercisesCollection = firestoreDB.collection(EXERCISES_COLLECTION);
