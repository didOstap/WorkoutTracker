import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Exercise from '../components/Exercise';
import CustomTextInput from '../components/CustomTextInput';
import { getExercises } from '../models/exercises';
import palette from '../components/styles/palette';

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
        placeholder={'Find Exercise'}
        onChangeText={handleExercise}
        leftIcon={
          <Ionicons
            name="ios-search"
            size={24}
            color={palette.black.blackMedium}
          />
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
    backgroundColor: palette.white.solid,
  },
  itemContainer: {
    width: '100%',
  },
});
