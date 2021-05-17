import React, {useState} from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  Switch,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feature from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../config/colors';
const Profile = ({navigation}) => {
  //const [isSwitchEnabled, setSwitch] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchOn = () => setIsEnabled((previousState) => previousState);
  function onSwitch  (){
    toggleSwitchOn ();
    toggleSwitch ();
  }


  return (
    /*main view*/
    <View style={{height: '100%', width: '100%'}}>
      {/**header view */}
      <View style={styles.headerstyle}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 30,
          }}>
          <TouchableOpacity
            style={{paddingLeft: 20, top: 10}}
            onPress={() => navigation.goBack(null)}>
            <AntDesign name="left" size={20} color="white"></AntDesign>
          </TouchableOpacity>
          <View
            style={{width: 138, height: 60, flexDirection: 'row', right: 98}}>
            <Image
              style={{
               
                width: 45,
                height: 45,
                tintColor: Colors.backgroundcolor,
              }}
              source={require('../Assets/appbar.png')}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'white',
                top: 10,
                left: 5,
              }}>
              HOME SERVE
            </Text>
          </View>
        </View>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
            // paddingLeft: 180,
            bottom: 18,
            top: 2,
          }}>
          Profile
        </Text>
      </View>
      {/*header view ends */}
      {/*starts */}
      <View style={{}}>
        <TouchableOpacity
          style={styles.viewfirst}
          onPress={() => navigation.navigate('userprofile')}>
          <FontAwesome name="user-circle" size={70} color={'#5F5F82'} />
          <Text
            style={{
              left: 100,
              bottom: 65,
              fontWeight: 'bold',
              // size: 20,
              color: '#5F5F82',
            }}>
            John Smith
          </Text>
          <TextInput
            style={{bottom: 60, left: 98}}
            placeholder={'4567899\njsmith@eample.com'}
            placeholderTextColor={'#5F5F82'}></TextInput>
          <TouchableOpacity
            style={{bottom: 120, left: 300}}
            onPress={() => navigation.navigate('userprofile')}>
            <AntDesign name="right" size={20} color="#DCDCDC" style={{right:10}} />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* ends*/}
        {/*booking view */}
        <View style={styles.viewfirst1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyBookings')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Ionicons name="md-newspaper-outline" size={28} color={'#5F5F82'} />
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.secondaryText,
                paddingRight: 110,
              }}>
              My Booking
            </Text>
            <TouchableOpacity>
              <AntDesign name="right" size={20} color="#DCDCDC" />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Review')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Feature name="star" size={28} color={Colors.secondaryText} />
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.secondaryText,
                paddingRight: 110,
              }}>
              My Reviews
            </Text>
            <TouchableOpacity>
              <AntDesign name="right" size={20} color="#DCDCDC" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        {/*booking view ends */}
        {/*notifiction view starts */}
        <TouchableOpacity onPress={()=> onSwitch()} >
        <View style={styles.viewsecond}>
          
          <Feature name="bell" size={30} color={Colors.secondaryText} style={{left:"20%"}} />
          <Text
            style={{
              fontSize: 15,
              paddingLeft: 40,
              color: Colors.secondaryText,
              fontWeight: 'bold',
            }}>
            Notification
          </Text>
          <Switch
            //style={{paddingLeft: 140}}
            trackColor={{false: '#bdbdbd', true: '#e8eae6'}}
           thumbColor={isEnabled ? Colors.primarycolor : '#ececec'}
           onValueChange={toggleSwitch}
           value={isEnabled}
            style={{position:'relative',left:120}}
          />
        </View>
        </TouchableOpacity>
        {/*notifiction view ends */}
        
        {/*register view starts */}
        <View style={styles.viewfirst2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PartnerReg')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <MaterialCommunityIcons
              name="account-tie-outline"
              size={30}
              color={Colors.secondaryText}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'midnightblue',
                paddingRight: 70,
                color: Colors.secondaryText,
              }}>
              Register as partner
            </Text>
            <TouchableOpacity>
              <AntDesign name="right" size={20} color="#DCDCDC" />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 8,
            }}>
            <Ionicons
              name="md-document-text-outline"
              size={28}
              color={Colors.secondaryText}
              left="60"
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.secondaryText,
                paddingRight: 65,
              }}>
              about HOME SERVE
            </Text>
            <TouchableOpacity>
              <AntDesign name="right" size={20} color="#DCDCDC" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        {/*register view ends */}
        {/*contct view starts */}


        <View style={styles.viewfirst2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contactus')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
           <Ionicons
            name="md-call-outline"
            size={28}
            color={Colors.secondaryText}
          />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'midnightblue',
                paddingRight: 70,
                color: Colors.secondaryText,
              }}>
              Contact Us
            </Text>

            <TouchableOpacity>
              <AntDesign name="right" size={20} color="#DCDCDC" />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 8,
            }}>
            <AntDesign
              name="logout"
              size={28}
              color={Colors.secondaryText}
              left="60"
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.secondaryText,
                paddingRight: 65,
              }}>
              Logout
            </Text>
            <TouchableOpacity>
              <AntDesign name="right" size={20} color="#DCDCDC"  style={{right:2}}/>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/*contact view end */}








      </View>
      {/** */}
    </View>
    /*main view ends here*/
  );
};
export default Profile;
const styles = StyleSheet.create({
  headerstyle: {
    margin: 0,
    height: 120,
    width: '100%',

    bottom: 6,
    // borderRadius: 15,
    // borderWidth: 1,
    backgroundColor: Colors.primarycolor,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  viewfirst: {
    // margin: 6,
    height: 100,
    width: 345,
    padding: 8,
    backgroundColor: 'white',
    borderColor: '#DCDCDC',
    borderRadius: 4,
    borderWidth: 1,
    width: '92%',
    left: '4%',
    right: '4%',
  },
  viewfirst1: {
    // margin: 6,
    top: 6,
    height: 95,
    width: '92%',
    left: '4%',
    right: '4%',
    padding: 3,
    backgroundColor: 'white',
    borderColor: '#DCDCDC',
    borderRadius: 4,
    borderWidth: 1,
  },
  viewsecond: {
    
  flexDirection: 'row',
    top: 12,
    width: '92%',
    left: '35%',
    right: '4%',
    padding: 3,
    backgroundColor: 'white',
    borderColor: '#DCDCDC',
    borderRadius: 4,
    borderWidth: 1,
  },
  viewfirst2: {
    // margin: 6,
    top: 18,
    height: 95,
    width: '92%',
    left: '4%',
    right: '4%',
    padding: 3,
    backgroundColor: 'white',
    borderColor: '#DCDCDC',
    borderRadius: 4,
    borderWidth: 1,
    marginTop:5
  },
  // viewsecond1: {
  //   // margin: 6,
  //   top: 24,
  //   // bottom:6,
  //   height: 50,
  //   width: '92%',
  //   left: '4%',
  //   right: '4%',
  //   padding: 10,
  //   backgroundColor: 'white',
  //   borderColor: '#DCDCDC',
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   flexDirection: 'row',
  // },
});
