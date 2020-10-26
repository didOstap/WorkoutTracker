import { createSwitchNavigator } from 'react-navigation';
import {
  CREATE_ACCOUNT_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  LANDING_SCREEN,
  RESET_PASSWORD_SCREEN,
  SIGN_IN_SCREEN,
} from '../../constants/navigation';
import Example from '../Example';

const AuthStack = createSwitchNavigator({
  [LANDING_SCREEN]: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Landing',
    },
  },
  [SIGN_IN_SCREEN]: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Sign In',
    },
  },
  [CREATE_ACCOUNT_SCREEN]: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Create Account',
    },
  },
  [FORGOT_PASSWORD_SCREEN]: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Forgot Password',
    },
  },
  [RESET_PASSWORD_SCREEN]: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Reset Password',
    },
  },
});

export default AuthStack;