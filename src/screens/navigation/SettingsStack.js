import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SETTINGS_SCREEN } from '../../constants/navigation';
import { SETTINGS } from '../../constants/strings';
import MockScreen from '../MockScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name={SETTINGS_SCREEN}
      component={MockScreen}
      options={{ title: SETTINGS }}
    />
  </SettingsStack.Navigator>
);

export default SettingsStackScreen;
