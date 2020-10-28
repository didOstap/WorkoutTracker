import { usersCollection } from './base';

export const addUser = async (docId, data) =>
  await usersCollection.doc(docId).set(data);
