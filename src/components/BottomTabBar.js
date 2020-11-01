import React, { useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import palette from './styles/palette';
import { getTabBarIcon } from '../models/navigation';

const BottomTabBar = ({ state, navigation }) => {
  const getIconName = useCallback((routeName) => getTabBarIcon(routeName), []);

  return (
    <View style={styles.paper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const iconName = getIconName(route.name);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.touchableOpacity}
            >
              <FontAwesome5
                name={iconName}
                size={25}
                color={isFocused ? palette.orange : palette.grey.low}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  paper: {
    backgroundColor: palette.grey.medium,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: palette.grey.dark,
    backgroundColor: palette.grey.dark,
  },
  text: {
    fontSize: 10,
  },
  activeText: {
    color: palette.grey.light,
  },
  inactiveText: {
    color: palette.grey.low,
  },
  touchableOpacity: {
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
});
