import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DAIRY_SCREEN } from '../../constants/navigation';
import { DAIRY } from '../../constants/strings';
import MockScreen from '../MockScreen';

const DairyStack = createStackNavigator();

const DairyStackScreen = () => (
  <DairyStack.Navigator>
    <DairyStack.Screen
      name={DAIRY_SCREEN}
      component={MockScreen}
      options={{ title: DAIRY }}
    />
  </DairyStack.Navigator>
);

export default DairyStackScreen;
