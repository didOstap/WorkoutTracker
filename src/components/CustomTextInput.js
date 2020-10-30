import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import palette from './styles/palette';

const CustomTextInput = (props) => {
  const { height, leftIcon } = props;
  return (
    <View style={styles.searchSection}>
      {!!leftIcon && leftIcon}
      <TextInput
        {...props}
        placeholderTextColor={palette.black.blackMedium}
        style={[styles.textInput, height && { height }]}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 10,
  },
  searchSection: {
    margin: 5,
    padding: 5,
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: palette.black.blackMedium,
  },
});
