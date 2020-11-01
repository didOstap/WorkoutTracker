import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import palette from './styles/palette';
import React from 'react';

const Exercise = ({ item: { name, muscles } }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>{name}</Text>
    </View>
    <View style={styles.itemContainer}>
      <Ionicons name="ios-body" size={20} color={palette.orange} />
      <Text style={styles.subTitle}>{muscles}</Text>
    </View>
  </View>
);

export default Exercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: palette.grey.low,
  },
  itemContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    color: palette.grey.light,
  },
  subTitle: {
    fontSize: 14,
    marginLeft: 5,
    color: palette.grey.low,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: palette.grey.low,
  },
});
