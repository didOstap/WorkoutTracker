import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Exercise from '../components/Exercise';
import CustomTextInput from '../components/CustomTextInput';
import { getExercises } from '../models/exercises';
import palette from '../components/styles/palette';
import { SEARCH_EXERCISE } from '../constants/strings';

const ExercisesScreen = () => {
  const [exercise, setExercise] = useState('');
  const exercises = useMemo(() => getExercises(exercise), [exercise]);
  const handleExercise = useCallback((value) => setExercise(value), [
    setExercise,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomTextInput
        value={exercise}
        maxLength={50}
        placeholder={SEARCH_EXERCISE}
        onChangeText={handleExercise}
        leftIcon={
          <Ionicons name="ios-search" size={24} color={palette.grey.low} />
        }
      />
      <View style={styles.itemContainer}>
        <FlatList
          data={exercises}
          renderItem={Exercise}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExercisesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: palette.grey.medium,
  },
  itemContainer: {
    width: '100%',
    marginBottom: 50,
  },
});
