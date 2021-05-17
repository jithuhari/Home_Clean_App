import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/routes/tabnavigation';

import Abc from './src/routes/intronav';

import {createStackNavigator} from '@react-navigation/stack';

import Intoslider from './src/Screens/Intoslider'
import Home from './src/Screens/Home1'



const Stack = createStackNavigator();

export default HomeSerice = () => {

  
  return (
      <NavigationContainer>
      <Abc/>
     </NavigationContainer>
  
  // <Home/>
    
   
  );
};
