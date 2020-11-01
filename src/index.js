import 'react-native-gesture-handler';
import React from 'react';
import App from './screens/navigation/Navigation';
import AppProvider from './context/AppProvider';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import palette from './components/styles/palette';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: palette.white.solid,
    card: palette.grey.medium,
    border: palette.grey.medium,
    background: palette.grey.medium,
    primary: palette.grey.low,
  },
};

export default () => {
  return (
    <AppProvider>
      <NavigationContainer theme={Theme}>
        <App />
      </NavigationContainer>
    </AppProvider>
  );
};
