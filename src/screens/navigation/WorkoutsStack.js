import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  CREATE_WORKOUT_SCREEN,
  WORKOUTS_SCREEN,
} from '../../constants/navigation';
import WorkoutsScreen from '../WorkoutsScreen';
import CreateWorkoutScreen from '../CreateWorkoutScreen';
import { CREATE_WORKOUT, WORKOUTS } from '../../constants/strings';

const WorkoutsStack = createStackNavigator();

const WorkoutsStackScreen = () => (
  <WorkoutsStack.Navigator>
    <WorkoutsStack.Screen
      name={WORKOUTS_SCREEN}
      component={WorkoutsScreen}
      options={{ title: WORKOUTS }}
    />
    <WorkoutsStack.Screen
      name={CREATE_WORKOUT_SCREEN}
      component={CreateWorkoutScreen}
      options={{ title: CREATE_WORKOUT }}
    />
  </WorkoutsStack.Navigator>
);

export default WorkoutsStackScreen;
