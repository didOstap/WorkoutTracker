import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import palette from './styles/palette';

const BlackButton = (props) => {
  const { title, disabledTitle, disabled } = props;
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
          disabled && styles.disabled,
        ]}
        {...props}
      >
        <Text style={styles.text}>
          {disabled && disabledTitle ? disabledTitle : title}
        </Text>
      </Pressable>
    </View>
  );
};

export default BlackButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 30,
    borderRadius: 5,
    backgroundColor: palette.black.high,
  },
  disabled: {
    backgroundColor: palette.black.medium,
  },
  pressed: {
    backgroundColor: palette.black.blackMedium,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: palette.white.solid,
  },
});
