import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainStack from './MainStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MoviesScreen from '../screens/MoviesScreen';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={MainStack}
        options={{
          tabBarLabel: 'Top',
          tabBarIcon: ({color}) => <Icon name="home" {...{color}} size={26} />,
        }}
      />
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({color}) => <Icon name="film" {...{color}} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
