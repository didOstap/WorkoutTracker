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

const NavigationStack = createStackNavigator();

const NavigationStackScreen = () => {
  const { user, loading, error } = useAuth();

  if (error) {
    alert(error.message);
  }

  return (
    <NavigationStack.Navigator headerMode="none">
      {loading ? (
        <NavigationStack.Screen
          name={LOADING_SCREEN}
          component={LoadingScreen}
          options={{ animationEnabled: false }}
        />
      ) : user ? (
        <NavigationStack.Screen
          name={APP_STACK}
          component={AppTabsScreen}
          options={{ animationEnabled: false }}
        />
      ) : (
        <NavigationStack.Screen
          name={AUTH_STACK}
          component={AuthStackScreen}
          options={{ animationEnabled: false }}
        />
      )}
    </NavigationStack.Navigator>
  );
};

export default NavigationStackScreen;
