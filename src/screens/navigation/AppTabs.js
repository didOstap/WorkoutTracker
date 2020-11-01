import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  WORKOUTS_STACK,
  DAIRY_STACK,
  MY_WEEK_STACK,
  EXERCISES_STACK,
  SETTINGS_STACK,
} from '../../constants/navigation';
import WorkoutsStack from './WorkoutsStack';
import DairyStack from './DairyStack';
import MyWeekStackScreen from './MyWeekStack';
import ExercisesStackScreen from './ExercisesStack';
import SettingsStackScreen from './SettingsStack';
import {
  DAIRY,
  EXERCISES,
  MY_WEEK,
  SETTINGS,
  WORKOUTS,
} from '../../constants/strings';
import BottomTabBar from '../../components/BottomTabBar';

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => {
  return (
    <AppTabs.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <AppTabs.Screen
        name={WORKOUTS_STACK}
        component={WorkoutsStack}
        options={{
          title: WORKOUTS.toUpperCase(),
        }}
      />
      <AppTabs.Screen
        name={DAIRY_STACK}
        component={DairyStack}
        options={{
          title: DAIRY.toUpperCase(),
        }}
      />
      <AppTabs.Screen
        name={MY_WEEK_STACK}
        component={MyWeekStackScreen}
        options={{
          title: MY_WEEK.toUpperCase(),
        }}
      />
      <AppTabs.Screen
        name={EXERCISES_STACK}
        component={ExercisesStackScreen}
        options={{
          title: EXERCISES.toUpperCase(),
        }}
      />
      <AppTabs.Screen
        name={SETTINGS_STACK}
        component={SettingsStackScreen}
        options={{
          title: SETTINGS.toUpperCase(),
        }}
      />
    </AppTabs.Navigator>
  );
};

export default AppTabsScreen;
