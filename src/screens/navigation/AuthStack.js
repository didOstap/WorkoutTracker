import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SIGN_IN_SCREEN } from '../../constants/navigation';
import SignInScreen from '../SignInScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
