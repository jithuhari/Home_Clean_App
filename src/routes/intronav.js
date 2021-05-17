import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './tabnavigation';
import Intro from '../Screens/Intoslider';

const Abc = createStackNavigator();

export default IntroNav = () => {
  return (
    <Abc.Navigator
      initialRouteName={Intro}
      screenOptions={{headerShown: false}}>
      <Abc.Screen name="Intro" component={Intro} options={{}} />
      <Abc.Screen name="MyTabs" component={MyTabs} />
    </Abc.Navigator>
  );
};
