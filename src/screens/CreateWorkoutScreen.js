import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { WORKOUTS_SCREEN } from '../constants/navigation';

const CreateWorkoutScreen = ({ navigation, route }) => {
  const navigateToWorkouts = useCallback(() => {
    navigation.push(WORKOUTS_SCREEN);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {route?.params?.name && <Text>{route.params.name}</Text>}
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
    </View>
  );
};

export default CreateWorkoutScreen;
