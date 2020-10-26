import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const getAvailableRoutes = (navigation) => {
  let availableRoutes = [];
  if (!navigation) return availableRoutes;

  const parent = navigation.dangerouslyGetParent();
  if (parent) {
    if (parent.router && parent.router.childRouters) {
      availableRoutes = [
        ...availableRoutes,
        ...Object.keys(parent.router.childRouters),
      ];
    }
    availableRoutes = [...availableRoutes, ...getAvailableRoutes(parent)];
  }
  return [...new Set(availableRoutes)].filter(
    (route) => route !== navigation.state.routeName
  );
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Example = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: getRandomColor(),
      }}
    >
      {getAvailableRoutes(navigation).map((route) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route)}
          key={route}
          style={{
            backgroundColor: '#fff',
            padding: 10,
            margin: 10,
          }}
        >
          {<Text>{route}</Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Example;
