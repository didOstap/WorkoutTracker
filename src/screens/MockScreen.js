import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../context/auth-context';
import { WORKOUTS_SCREEN, WORKOUTS_STACK } from '../constants/navigation';

const MockScreen = () => {
  const { logout } = useAuth();
  const {navigate} = useNavigation();
  const navigateToWorkouts = useCallback(() => {
    navigate(WORKOUTS_STACK, { screen: WORKOUTS_SCREEN });
  }, [navigate]);
  const loggingOut = useCallback(() => logout(), [logout]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => navigateToWorkouts()}
        style={{
          backgroundColor: '#fff',
          padding: 10,
          margin: 10,
        }}
      >
        <Text>Go To Workouts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => loggingOut()}
        style={{
          backgroundColor: '#fff',
          padding: 10,
          margin: 10,
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MockScreen;
