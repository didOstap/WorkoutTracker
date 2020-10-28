import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  APP_STACK,
  AUTH_STACK,
  LOADING_SCREEN,
} from '../../constants/navigation';
import { useAuth } from '../../context/auth-context';
import AppTabsScreen from './AppTabs';
import LoadingScreen from '../LoadingScreen';
import AuthStackScreen from './AuthStack';

const AppStack = createStackNavigator();

const navigation = () => {
  const { user, loading } = useAuth();

  return (
    <AppStack.Navigator headerMode="none">
      {loading ? (
        <AppStack.Screen
          name={LOADING_SCREEN}
          component={LoadingScreen}
          options={{ animationEnabled: false }}
        />
      ) : user ? (
        <AppStack.Screen
          name={APP_STACK}
          component={AppTabsScreen}
          options={{ animationEnabled: false }}
        />
      ) : (
        <AppStack.Screen
          name={AUTH_STACK}
          component={AuthStackScreen}
          options={{ animationEnabled: false }}
        />
      )}
    </AppStack.Navigator>
  );
};

export default navigation;
