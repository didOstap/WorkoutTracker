import { createSwitchNavigator } from 'react-navigation';
import {
  APP_STACK,
  AUTH_STACK,
  LOADING_SCREEN,
} from '../../constants/navigation';
import Example from '../Example';
import AuthStack from './AuthStack';
import AppTabs from './AppTabs';

const navigation = createSwitchNavigator({
  [LOADING_SCREEN]: {
    screen: Example,
  },
  [AUTH_STACK]: {
    screen: AuthStack,
  },
  [APP_STACK]: {
    screen: AppTabs,
  },
});

export default navigation;
