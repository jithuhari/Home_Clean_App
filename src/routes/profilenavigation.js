import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';



import profile  from '../Screens/profile'
import userprofile  from '../Screens/userprofile'
import Contactus  from '../Screens/Contactus'
import MyBookings from '../Screens/Mybookings'
import About from '../Screens/About'
import PartnerReg from '../Screens/PartnerReg'
import Review from '../Screens/Review'
import RegisterPartner from '../Screens/RegisterPartner';
import OrderDetails from '../Screens/Orderdetails';
const Stack = createStackNavigator();

export default ProfileNavigation = () => {
  return (
   
           
            <Stack.Navigator initialRouteName="profile" screenOptions={{headerShown:false}}>
               <Stack.Screen name='profile' component={profile} />
               <Stack.Screen name='userprofile' component={userprofile} />
               <Stack.Screen name='Contactus' component={Contactus} />
               <Stack.Screen name='MyBookings' component={MyBookings} />
               <Stack.Screen name='About' component={About} />
               <Stack.Screen name='PartnerReg' component={PartnerReg} />
               <Stack.Screen name='RegisterPartner' component={RegisterPartner} />
               <Stack.Screen name='Review' component={Review} />
               <Stack.Screen name='OrderDetails' component={OrderDetails} />
               
              


            </Stack.Navigator>
        
  );
};

