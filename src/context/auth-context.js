import React, { createContext, useCallback, useMemo } from 'react';

import { signInWithGoogle } from '../models/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../utils/firebaseSetup';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const googleSignIn = useCallback(async () => signInWithGoogle(), []);
  const logout = useCallback(async () => firebaseAuth.signOut(), []);
  const value = useMemo(
    () => ({ user, loading, error, googleSignIn, logout }),
    [user, loading, error, googleSignIn, logout]
  );

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
