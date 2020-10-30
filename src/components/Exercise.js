import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import palette from './styles/palette';
import React from 'react';

const Exercise = ({ item: { name, muscles } }) => (
  <View>
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.subTitle}>Muscles: {muscles}</Text>
        <Ionicons name="ios-body" size={20} color={palette.blueSky} />
      </View>
    </View>
    <View style={styles.divider} />
  </View>
);

export default Exercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  itemContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 14,
    color: palette.black.medium,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: palette.black.light,
  },
});
