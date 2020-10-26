import { createStackNavigator } from 'react-navigation-stack';
import { MY_WEEK_SCREEN } from '../../constants/navigation';
import Example from '../Example';
import { MY_WEEK } from '../../constants/strings';

const MyWeekStack = createStackNavigator(
  {
    [MY_WEEK_SCREEN]: {
      screen: Example,
      navigationOptions: {
        headerTitle: MY_WEEK,
      },
    },
  },
  {
    initialRouteName: MY_WEEK_SCREEN,
  }
);

export default MyWeekStack;
