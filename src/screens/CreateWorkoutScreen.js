import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ADD_EXERCISE } from '../constants/strings';

const CreateWorkoutScreen = ({ route }) => {
  const { navigate } = useNavigation();
  const addExercise = useCallback(() => {}, []);

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
        onPress={() => addExercise()}
        style={{
          backgroundColor: '#fff',
          padding: 10,
          margin: 10,
        }}
      >
        <Text>{ADD_EXERCISE}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateWorkoutScreen;
