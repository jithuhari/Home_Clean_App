import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';

const ServiceBooking = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      {/* <ScrollView style={{height: 700}}> */}
        {/*header*/}

        <View style={styles.header}>
        <View style={{flexDirection: 'row',top:-10}}>
          <TouchableOpacity
            style={{paddingLeft: 20, top: 7}}
            onPress={() => navigation.goBack(null)}>
            <AntDesign name="left" size={20} color="white"></AntDesign>
          </TouchableOpacity>
          <Image
            source={require('../Assets/appbar.png')}
            style={{
              height: 45,
              width: 45,
              tintColor: Colors.backgroundcolor,
              left: 100,
              top: 4,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: Colors.backgroundcolor,
              fontWeight: 'bold',
              left: 105,
              top: 14,
            }}>
            HOME SERVE
          </Text>
        </View>
        
      </View>
        <View style={styles.mainView}>
          <Text style={styles.text1}>Your Service have been booked</Text>
          <Image
            style={{
              top: 30,
              left: 140,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={require('../Assets/plumbing/bookser.png')}></Image>
          <Text style={styles.text2}>
            Our Service Partner will be at your service on
          </Text>
          <Text style={styles.text3}>02 April 2020</Text>
          <Text style={styles.text4}>between</Text>
          <Text style={styles.text5}>10 AM to 11 AM</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: Colors.secondaryText, fontWeight: '700'}}>
              Review Booking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text style={{color: Colors.backgroundcolor, fontWeight: '700'}}>
              Cancel Booking
            </Text>
          </TouchableOpacity>
          <View style={styles.containers}>
            <Text
              style={{
                color: Colors.primarycolor,
                left: 72,
                top: 10,
                fontWeight: '700',
              }}>
              Things to be taken care of
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  top: 25,
                  left: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../Assets/plumbing/handsani.png')}
              />
              <Image
                style={{
                  top: 25,
                  left: 65,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../Assets/plumbing/mask.png')}
              />
              <Image
                style={{
                  top: 25,
                  left: 105,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../Assets/plumbing/social.png')}
              />
            </View>
          </View>
        </View>
      {/* </ScrollView> */}
    </View>
  );
};
export default ServiceBooking;
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        paddingTop: 1,
        alignItems: 'center',
        //padding:2,
        // paddingLeft:2,
        elevation: 0,
        // borderBottomColor:'grey',
        backgroundColor: Colors.primarycolor,
        // justifyContent:'center'
        borderBottomRightRadius: 15,
        borderBottomStartRadius: 15,
      },
  text: {
    fontSize: 15,
    fontWeight: '900',
    // textAlign:'center',
    //alignItems:'center',
    fontWeight: 'bold',
    color: Colors.secondaryText,
    paddingLeft: 10,
    paddingTop: 17,
  },
  mainView: {
    flexDirection: 'column',
    height: 700,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 17,
  },
  text2: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 40,
  },
  text3: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 0,
  },
  text4: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 0,
  },
  text5: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 0,
  },
  button: {
    backgroundColor: Colors.backgroundcolor,
    width: '55%',
    height: 60,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 30,
    left: 90,
    borderWidth: 1,
    borderColor: Colors.secondaryText,
  },
  button1: {
    backgroundColor: Colors.primarycolor,
    width: '55%',
    height: 60,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 50,
    left: 90,
    borderWidth: 1,
    borderColor: Colors.secondaryText,
  },
  text6: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 97,
  },
  containers: {
    backgroundColor: Colors.continercolor,
    top: 70,
    //padding:70,
    height: 140,
    width: 325,
    left: 20,
    borderRadius: 10,
  },
});
