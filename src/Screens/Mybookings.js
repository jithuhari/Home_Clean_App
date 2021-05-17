import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Colors from '../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

export default MyBookings = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: Colors.backgroundcolor,height:'100%'}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{bottom: 5, left: 20, top: 10}}
          onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconItem}
            name="left"
            size={20}
            color={Colors.backgroundcolor}
          />
        </TouchableOpacity>

        <View style={{width: 148, height: 47, paddingLeft: 90, top: 10}}>
          <Image
            style={{width: 45, height: 45, tintColor: '#fff'}}
            source={require('../Assets/Images/Home.png')}
          />
        </View>
        <Text style={styles.text}>HOME SERVE</Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.primarycolor,
          height: 45,
          borderBottomLeftRadius: 15,
          borderBottomEndRadius: 15,
          zIndex:1
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 14,
            fontWeight: 'bold',
            color: Colors.backgroundcolor,
          }}>
          My Bookings
        </Text>
      </View>
      <ScrollView style={{width: '92%', left: '4%', right: '4%',}}>
        <View style={styles.maincontiner}>
          <View style={styles.continer}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="checkbox-marked-circle"
                color="rgba(33, 150, 83, 1)"
                size={17}
              />
              <Text style={styles.text3}>Completed</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.head}>Home Sanitization</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text4}>Size of house:</Text>
                  <Text style={styles.text5}>2BHK</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text7}>Storey:</Text>
                  <Text style={styles.text6}>Single</Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=>{
                navigation.navigate('OrderDetails');
              }} style={styles.touch}>
                <Text style={styles.textview}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* second */}
        <View style={styles.maincontiner}>
          <View style={styles.continer}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="checkbox-marked-circle"
                color="rgba(33, 150, 83, 1)"
                size={17}
              />
              <Text style={styles.text3}>Completed</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.head}>Home Sanitization</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text4}>Size of house:</Text>
                  <Text style={styles.text5}>2BHK</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text7}>Storey:</Text>
                  <Text style={styles.text6}>Single</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.textview}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* thired */}
        <View style={styles.maincontiner}>
          <View style={styles.continer}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="checkbox-marked-circle"
                color="rgba(33, 150, 83, 1)"
                size={17}
              />
              <Text style={styles.text3}>Completed</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.head}>Home Sanitization</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text4}>Size of house:</Text>
                  <Text style={styles.text5}>2BHK</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text7}>Storey:</Text>
                  <Text style={styles.text6}>Single</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.textview}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* 4 */}
        <View style={styles.maincontiner}>
          <View style={styles.continer}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="checkbox-marked-circle"
                color="rgba(33, 150, 83, 1)"
                size={17}
              />
              <Text style={styles.text3}>Completed</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.head}>Home Sanitization</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text4}>Size of house:</Text>
                  <Text style={styles.text5}>2BHK</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text7}>Storey:</Text>
                  <Text style={styles.text6}>Single</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.textview}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* 5 */}
        <View style={styles.maincontiner}>
          <View style={styles.continer}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="checkbox-marked-circle"
                color="rgba(33, 150, 83, 1)"
                size={17}
              />
              <Text style={styles.text3}>Completed</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.head}>Home Sanitization</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text4}>Size of house:</Text>
                  <Text style={styles.text5}>2BHK</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text7}>Storey:</Text>
                  <Text style={styles.text6}>Single</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.textview}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* 6 */}
        <View style={styles.maincontiner}>
          <View style={styles.continer}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="checkbox-marked-circle"
                color="rgba(33, 150, 83, 1)"
                size={17}
              />
              <Text style={styles.text3}>Completed</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.head}>Home Sanitization</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text4}>Size of house:</Text>
                  <Text style={styles.text5}>2BHK</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text7}>Storey:</Text>
                  <Text style={styles.text6}>Single</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.textview}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
  },
  text: {
    fontSize: 15,

    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: -3,
    top: 5,
  },
  continer: {
    //   backgroundColor:Colors.continercolor,

    // top: 10,
    height: 90,
    borderRadius: 15,
    //   borderBottomLeftRadius:15
  },
  maincontiner: {
    borderRadius: 15,
    backgroundColor: Colors.continercolor,
    marginTop: 15,
    padding: 18,
  },
  text3: {
    color: Colors.secondaryText,
    fontSize: 14,
    fontWeight: '700',
    left: 8,
  },
  textview: {
    color: Colors.backgroundcolor,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  touch: {
    backgroundColor: Colors.primarycolor,
    height: 25,
    width: 90,
    borderRadius: 5,
    justifyContent: 'center',
    left: 85,
    top: 20,
  },
  head: {
    color: Colors.primarycolor,
    fontSize: 16,
    fontWeight: 'bold',
    top: 5,
  },
  text4: {
    color: Colors.secondaryText,
    fontSize: 14,
    fontWeight: '400',
    top: 8,
  },
  text5: {
    color: Colors.secondaryText,
    fontSize: 14,
    fontWeight: '400',
    top: 8,
    left: 20,
  },
  text6: {
    color: Colors.secondaryText,
    fontSize: 14,
    fontWeight: '400',
    top: 10,
    left: 60,
  },
  text7: {
    color: Colors.secondaryText,
    fontSize: 14,
    fontWeight: '400',
    top: 10,
  },
});
