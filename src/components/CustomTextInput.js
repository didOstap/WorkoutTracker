import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import palette from './styles/palette';

const CustomTextInput = (props) => {
  const { height } = props;
  return (
    <TextInput
      {...props}
      placeholderTextColor={palette.black.blackMedium}
      style={[styles.textInput, height && { height }]}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 3,
    paddingHorizontal: 10,
    borderColor: palette.black.medium,
  },
});
