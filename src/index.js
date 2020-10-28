import 'react-native-gesture-handler';
import React from 'react';
import App from './screens/navigation/Navigation';
import AppProvider from './context/AppProvider';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </AppProvider>
  );
};
