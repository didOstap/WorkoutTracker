import exercises from '../../exercises';
import { musclesTypes } from '../enums/muscles';

export const getExercises = (value) => {
  const filteredExercises = [];
  Object.values(exercises).forEach((exercise) => {
    if (!value) {
      filteredExercises.push(getExercise(exercise));
    } else if (exercise.name.toLowerCase().includes(value.toLowerCase())) {
      filteredExercises.push(getExercise(exercise));
    }
  });
  return filteredExercises;
};

export const getMuscles = (muscles) =>
  muscles.map((muscle) => musclesTypes[muscle]);

export const getExercise = ({ name, muscles, ...exercise }) => ({
  ...exercise,
  name,
  muscles: getMuscles(muscles),
});
