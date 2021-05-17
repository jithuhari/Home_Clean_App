import * as React from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';

// import Home from '../Screens/home';
import HomeSafe from '../Screens/homesafe';
import Profile from '../Screens/profile';
// import Ele from '../Screens/Electrical';

import Navigation from './homenavigation';
import ProfileNavigation from './profilenavigation';

import IntroNav from './intronav';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#333458",
      }}>
      <Tab.Screen
        name="Home"
        component={Navigation}
        options={{
          // set
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            const image = focused ? 'home' : 'home-outline';
            return <Ionicons name={image} size={28} color="#333458" />;
          },
        }}
      />
      <Tab.Screen
        name="HomeSafe"
        component={HomeSafe}
        options={{
          tabBarLabel: 'HOME safe',
          tabBarIcon: ({focused}) => {
            const image = focused ? 'shield-cross' : 'shield-cross-outline';
            return (
              <MaterialCommunityIcons name={image} size={28} color="#333458" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            const image = focused ? 'user-circle' : 'user-circle-o';
            return <FontAwesome name={image} size={28} color="#333458" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
