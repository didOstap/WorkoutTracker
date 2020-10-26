import { createStackNavigator } from 'react-navigation-stack';
import {
  CREATE_WORKOUT_SCREEN,
  WORKOUTS_SCREEN,
} from '../../constants/navigation';
import Example from '../Example';
import { CREATE_WORKOUT, WORKOUTS } from '../../constants/strings';

const WorkoutsStack = createStackNavigator(
  {
    [WORKOUTS_SCREEN]: {
      screen: Example,
      navigationOptions: {
        headerTitle: WORKOUTS,
      },
    },
    [CREATE_WORKOUT_SCREEN]: {
      screen: Example,
      navigationOptions: {
        headerTitle: CREATE_WORKOUT,
      },
    },
  },
  {
    initialRouteName: WORKOUTS_SCREEN,
  }
);

export default WorkoutsStack;
