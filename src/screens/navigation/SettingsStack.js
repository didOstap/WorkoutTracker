import { createStackNavigator } from 'react-navigation-stack';
import { SETTINGS_SCREEN } from '../../constants/navigation';
import Example from '../Example';
import { SETTINGS } from '../../constants/strings';

const SettingsStack = createStackNavigator(
  {
    [SETTINGS_SCREEN]: {
      screen: Example,
      navigationOptions: {
        headerTitle: SETTINGS,
      },
    },
  },
  {
    initialRouteName: SETTINGS_SCREEN,
  }
);

export default SettingsStack;
