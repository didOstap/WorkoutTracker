import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  WORKOUTS_STACK,
  DAIRY_STACK,
  MY_WEEK_STACK,
  EXERCISES_STACK,
  SETTINGS_STACK,
} from '../../constants/navigation';
import {
  WORKOUTS,
  DAIRY,
  MY_WEEK,
  EXERCISES,
  SETTINGS,
} from '../../constants/strings';
import WorkoutsStack from './WorkoutsStack';
import DairyStack from './DairyStack';
import MyWeekStack from './MyWeekStack';
import ExercisesStack from './ExercisesStack';
import SettingsStack from './SettingsStack';

const AppTabs = createBottomTabNavigator(
  {
    [WORKOUTS_STACK]: {
      screen: WorkoutsStack,
      navigationOptions: {
        tabBarLabel: WORKOUTS,
      },
    },
    [DAIRY_STACK]: {
      screen: DairyStack,
      navigationOptions: {
        tabBarLabel: DAIRY,
      },
    },
    [MY_WEEK_STACK]: {
      screen: MyWeekStack,
      navigationOptions: {
        tabBarLabel: MY_WEEK,
      },
    },
    [EXERCISES_STACK]: {
      screen: ExercisesStack,
      navigationOptions: {
        tabBarLabel: EXERCISES,
      },
    },
    [SETTINGS_STACK]: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel: SETTINGS,
      },
    },
  },
  {
    initialRouteName: WORKOUTS_STACK,
  }
);

export default AppTabs;
