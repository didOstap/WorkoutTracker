import {
  DAIRY_STACK,
  EXERCISES_STACK,
  MY_WEEK_STACK,
  SETTINGS_STACK,
  WORKOUTS_STACK,
} from '../constants/navigation';

export const getTabBarIcon = (routeName) => {
  if (routeName === WORKOUTS_STACK) {
    return 'clock';
  } else if (routeName === DAIRY_STACK) {
    return 'calendar-alt';
  } else if (routeName === MY_WEEK_STACK) {
    return 'chart-bar';
  } else if (routeName === EXERCISES_STACK) {
    return 'dumbbell';
  } else if (routeName === SETTINGS_STACK) {
    return 'align-justify';
  }
};
