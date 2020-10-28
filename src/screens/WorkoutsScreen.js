import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CREATE_WORKOUT } from '../constants/strings';
import { CREATE_WORKOUT_SCREEN } from '../constants/navigation';

const WorkoutsScreen = ({ navigation, route }) => {
  const navToCreateWorkout = useCallback(() => {
    navigation.push(CREATE_WORKOUT_SCREEN, { name: CREATE_WORKOUT });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {route?.params?.name && <Text>route.params.name</Text>}
      <TouchableOpacity
        onPress={() => navToCreateWorkout()}
        style={{
          backgroundColor: '#fff',
          padding: 10,
          margin: 10,
        }}
      >
        <Text>Go To Create Workout Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutsScreen;
