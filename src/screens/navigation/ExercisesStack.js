import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EXERCISES_SCREEN } from '../../constants/navigation';
import { EXERCISES } from '../../constants/strings';
import ExercisesScreen from '../ExercisesScreen';

const ExercisesStack = createStackNavigator();

const ExercisesStackScreen = () => (
  <ExercisesStack.Navigator>
    <ExercisesStack.Screen
      name={EXERCISES_SCREEN}
      component={ExercisesScreen}
      options={{
        title: EXERCISES,
      }}
    />
  </ExercisesStack.Navigator>
);

export default ExercisesStackScreen;
