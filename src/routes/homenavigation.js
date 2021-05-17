import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './tabnavigation';

import Ele from '../Screens/Electrical';
import Home from '../Screens/home';

import Cleaning from '../Screens/Cleaning';
import HomeSanitization from '../Screens/cleaningsub';
import InteriorDesigning from '../Screens/InteriorDesigning';
import Plumbing from '../Screens/Plumbing';
import Appliancesrepair from '../Screens/appliancesrepair';
import AcServices from '../Screens/AcServices';

import Fan from '../Screens/subpage1';
import Plumbingsub from '../Screens/plumbingsub';
import Appliancesubpage from '../Screens/appliancesubpage';
import AcServicesub from '../Screens/acServicesub';
import Interiorsub from '../Screens/Interiorsub';

import Address from '../Screens/address';
import Shedule from '../Screens/Shedule';
import Servicesummary from '../Screens/Servicesummary';
import ServiceBooking from '../Screens/ServiceBooking';

import Intro from '../Screens/Intoslider';

const Stack = createStackNavigator();

export default HomeNavigations = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Ele" component={Ele} />

      <Stack.Screen name="Cleaning" component={Cleaning} />
      <Stack.Screen name="HomeSanitization" component={HomeSanitization} />
      <Stack.Screen name="InteriorDesigning" component={InteriorDesigning} />
      <Stack.Screen name="Plumbing" component={Plumbing} />
      <Stack.Screen name="Appliancesrepair" component={Appliancesrepair} />
      <Stack.Screen name="AcServices" component={AcServices} />

      <Stack.Screen name="Fan" component={Fan} />
      <Stack.Screen name="Plumbingsub" component={Plumbingsub} />
      <Stack.Screen name="Appliancesubpage" component={Appliancesubpage} />
      <Stack.Screen name="AcServicesub" component={AcServicesub} />
      <Stack.Screen name="Interiorsub" component={Interiorsub} />

      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Shedule" component={Shedule} />
      <Stack.Screen name="Servicesummary" component={Servicesummary} />
      <Stack.Screen name="ServiceBooking" component={ServiceBooking} />


      {/* <Stack.Screen name="Intro" component={Intro}  /> */}





    </Stack.Navigator>
  );
};
