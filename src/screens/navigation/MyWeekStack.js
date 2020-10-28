import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MY_WEEK_SCREEN } from '../../constants/navigation';
import { MY_WEEK } from '../../constants/strings';
import MockScreen from '../MockScreen';

const MyWeekStack = createStackNavigator();

const MyWeekStackScreen = () => (
  <MyWeekStack.Navigator>
    <MyWeekStack.Screen
      name={MY_WEEK_SCREEN}
      component={MockScreen}
      options={{ title: MY_WEEK }}
    />
  </MyWeekStack.Navigator>
);

export default MyWeekStackScreen;
