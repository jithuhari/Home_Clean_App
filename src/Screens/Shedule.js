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

const Shedule = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      {/* <ScrollView style={{height: 700}}> */}
        {/*header*/}

        <View style={styles.header}>
        <View style={{flexDirection: 'row',top:-20}}>
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
        <Text
          style={{
            color: Colors.backgroundcolor,
            fontSize: 16,
            fontWeight: 'bold',
            top: 30,
            justifyContent: 'flex-start',
            right: 150,
          }}>
          Schedule your service
        </Text>
      </View>
        <View style={styles.mainView}>
          {/*Service*/}

          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: 'bold',
              left: 15,
              marginTop: 15,
            }}>
            When do you need this service?
          </Text>
          <View style={styles.textBox}>
            <TouchableOpacity
              style={{top: 10, left: 20}}
              onPress={() => navigation.goBack()}>
              <AntDesign
                style={styles.iconItem}
                name="left"
                size={20}
                color={Colors.continercolor}
              />
            </TouchableOpacity>
            <Text style={{textAlign: 'center', top: 11, left: 55}}> 02 </Text>
            <Text style={{textAlign: 'center', top: 11, left: 75}}>
              {' '}
              April{' '}
            </Text>
            <Text style={{textAlign: 'center', top: 11, left: 95}}> 2021</Text>
            <TouchableOpacity
              style={{top: 10, left: 120}}
              onPress={() => navigation.goBack()}>
              <AntDesign
                style={styles.iconItem}
                name="right"
                size={20}
                color={Colors.continercolor}
              />
            </TouchableOpacity>
          </View>

          {/*Time*/}

          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: 'bold',
              left: 15,
              marginTop: 15,
            }}>
            Choose Time
          </Text>
          <View style={styles.innerView}>
            <TouchableOpacity style={styles.button1}>
              <Text style={{color: Colors.secondaryText}}>10am-11am</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={{color: Colors.secondaryText}}>12pm--1pm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
              <Text style={{color: Colors.secondaryText}}>2pm-3pm</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button4}>
            <Text style={{color: Colors.secondaryText}}>4pm-5pm</Text>
          </TouchableOpacity>
          
        </View>
        <View style={{top: 100, left: '4%', right: '4%'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(95, 95, 130, 1)',
            width: '92%',
            justifyContent: 'flex-end',
            position: 'absolute',
            // bottom: 40,
            borderRadius: 15,

            height: 80,
          }}>
          <View style={{flexDirection: 'row', left: 20, bottom: 7}}>
            <Text
              style={{
                color: Colors.backgroundcolor,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ₹1,899
            </Text>
            <Text
              style={{
                color: Colors.backgroundcolor,
                fontSize: 14,
                left: 30,
              }}>
              1 item
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.backgroundcolor,
              width: 88,
              height: 25,
              borderRadius: 8,
              bottom: 18,
              alignSelf: 'flex-end',
              right: 20,
            }}
            onPress={() => {
              navigation.navigate('Servicesummary');
            }}>
            <Text
              style={{
                color: Colors.secondaryText,
                fontWeight: 'bold',
                textAlign: 'center',
                top: 2,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', left: 20, bottom: 20}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: Colors.backgroundcolor,
                borderRightColor: Colors.backgroundcolor,
                borderRightWidth: 0.54,
                paddingRight: 10,
              }}>
              AC DServicing
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Colors.backgroundcolor,
                paddingLeft: 10,
              }}>
              Window
            </Text>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
      
    </View>
  );
};
export default Shedule;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 110,
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
    color: Colors.text,
    paddingLeft: 10,
    paddingTop: 17,
  },
  mainView: {
    flexDirection: 'column',
    height: 400,
    left: 10,
  },
  textBox: {
    marginTop: 5,
    width: 300,
    height: 40,
    left: 10,
    borderRadius: 7,
    backgroundColor: Colors.continercolor,
    flexDirection: 'row',
  },
  innerView: {
    flexDirection: 'row',
    left: 10,
  },
  button1: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 10,
    elevation: 1,
    borderColor: Colors.secondaryText,
    borderWidth: 1,
  },
  button2: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 20,
    elevation: 1,
    borderColor: Colors.secondaryText,
    borderWidth: 1,
  },
  button3: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 30,
    elevation: 1,
    borderColor: Colors.secondaryText,
    borderWidth: 1,
  },
  button4: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 20,
    left: 20,
    elevation: 1,
    borderColor: Colors.secondaryText,
    borderWidth: 1,
  },
});
