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
        placeholderTextColor={palette.grey.low}
        style={[styles.textInput, height && { height }]}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 10,
    color: palette.white.solid,
  },
  searchSection: {
    marginTop: 5,
    marginHorizontal: 5,
    padding: 5,
    paddingLeft: 15,
    width: '95%',
    height: 45,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.grey.dark,
  },
});
