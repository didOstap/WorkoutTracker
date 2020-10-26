import { createStackNavigator } from 'react-navigation-stack';
import { EXERCISES_SCREEN } from '../../constants/navigation';
import Example from '../Example';
import { EXERCISES } from '../../constants/strings';

const ExercisesStack = createStackNavigator(
  {
    [EXERCISES_SCREEN]: {
      screen: Example,
      navigationOptions: {
        headerTitle: EXERCISES,
      },
    },
  },
  {
    initialRouteName: EXERCISES_SCREEN,
  }
);

export default ExercisesStack;
