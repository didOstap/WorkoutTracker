import { createStackNavigator } from 'react-navigation-stack';
import { DAIRY_SCREEN } from '../../constants/navigation';
import Example from '../Example';
import { DAIRY } from '../../constants/strings';

const DairyStack = createStackNavigator(
  {
    [DAIRY_SCREEN]: {
      screen: Example,
      navigationOptions: {
        headerTitle: DAIRY,
      },
    },
  },
  {
    initialRouteName: DAIRY_SCREEN,
  }
);

export default DairyStack;
