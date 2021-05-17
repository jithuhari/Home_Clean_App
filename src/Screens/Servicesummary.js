import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {Searchbar, Card, Title} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../config/colors';
import CheckBox from '@react-native-community/checkbox';
import {color} from 'react-native-reanimated';

const ServiceSummay = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={{backgroundColor:Colors.backgroundcolor}}>
      <View>
        {/*headerview */}
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
            right: 40,
          }}>
          Service Summary
        </Text>
      </View>
        {/*headerview ends*/}
      </View>
      <View style={{backgroundColor: Colors.backgroundcolor, height: '100%',top:20}}>
        {/*first rectangle view starts */}
        <View style={styles.rect1}>
          <Text style={styles.textstyle}>Service Date:</Text>
          <View style={styles.line} />
          <Text
            style={{
              color: Colors.secondaryText,
              padding: 8,
              top: 6,
              paddingLeft: 30,
            }}>
            02 April 2021 | 10.00am
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', left: 250, bottom: 10}}>
            <Text
              style={{
                color: Colors.secondaryText,
                fontSize: 15,
                fontWeight: 'bold',
                bottom: 3,
              }}>
              Change{' '}
            </Text>
            <AntDesign
              name="doubleright"
              size={15}
              color={Colors.secondaryText}
              fontWeight="bold"
            />
          </TouchableOpacity>
        </View>

        {/*first rectangle view ends */}

        {/*2 rectangle view starts */}
        <View style={styles.rect2}>
          <Text style={styles.textstyle}>Service Address:</Text>
          <View style={styles.line} />
          <Text
            style={{
              color: Colors.secondaryText,
              padding: 8,
              top: 0,
              paddingLeft: 30,
            }}>
            {'agthujggddfhss\nsfhkuhhvg\nadgbbijgfcv'}
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', left: 250, bottom: 17}}>
            <Text
              style={{
                color: Colors.secondaryText,
                fontSize: 15,
                fontWeight: 'bold',
                bottom: 5,
              }}>
              Change{' '}
            </Text>
            <AntDesign
              name="doubleright"
              size={15}
              color={Colors.secondaryText}
              fontWeight="bold"
            />
          </TouchableOpacity>
        </View>

        {/*2 rectangle view ends */}

        {/*3 rectangle view starts */}
        <View style={styles.rect3}>
          <Text style={styles.textstyle}>Requested Services:</Text>
          <View style={styles.line} />
          <View style={{flexDirection: 'column', padding: 5}}>
            <Text style={styles.text1}>Home Sanitization</Text>
            <Text style={styles.text2}>Size of house: 2BHK - 1 +</Text>
            <Text style={styles.text2}>Storey: Single</Text>
          </View>

          <Text></Text>
        </View>

        {/*3 rectangle view ends */}

        {/*4 rectangle view starts */}
        <View style={styles.rect4}>
          <View style={{flexDirection: 'column', padding: 10}}>
            <Text style={styles.text1}>Total Amount:</Text>
            <Text style={styles.text2}>Total Amount:</Text>
            <Text style={styles.text1}>Total Payable:</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              bottom: 90,
              left: 250,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row', padding: 3}}>
              <FontAwesome
                name="rupee"
                size={15}
                color={Colors.secondaryText}
              />
              <Text style={{bottom: 3, color: Colors.secondaryText}}>
                1,899
              </Text>
            </View>
            <View style={{flexDirection: 'row', padding: 3}}>
              <Text style={{bottom: 3, color: Colors.secondaryText}}> - </Text>
              <FontAwesome
                name="rupee"
                size={15}
                color={Colors.secondaryText}
              />
              <Text style={{bottom: 3, color: Colors.secondaryText}}>50</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 3}}>
              <FontAwesome
                name="rupee"
                size={15}
                color={Colors.secondaryText}
              />
              <Text style={{bottom: 3, color: Colors.secondaryText}}>
                1,899
              </Text>
            </View>
          </View>
        </View>

        {/*4 rectangle view ends */}

        {/*checkbox */}

        <View style={{flexDirection: 'row', top: 60, left: 20}}>
          <CheckBox
            tintColors={{false: Colors.secondaryText}}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text style={{margin: 8, color: Colors.secondaryText}}>
            Make payment after service completion{' '}
          </Text>
        </View>

        <View style={{flexDirection: 'row', top: 50, left: 20}}>
          <CheckBox
            tintColors={{false: Colors.secondaryText}}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text style={{margin: 8, color: Colors.secondaryText}}>
            I agree to terms and condition{' '}
          </Text>
        </View>
        {/*check box end */}

        {/*button */}

        <TouchableOpacity style={{top:50,}}  onPress={() => {
              navigation.navigate('ServiceBooking');
            }}>
          <View style={styles.buttonstyle}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('ServiceBooking');
            }}>
              <Text
                style={{
                  color: Colors.backgroundcolor,
                  fontSize: 18,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  left: 110,
                  top: 6,
                }}>
                Book Service
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/*button */}
      </View>
    </View>
  );
};

export default ServiceSummay;
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

  rect1: {
    width: '94%',
    height: 75,
    backgroundColor: Colors.continercolor,
    borderRadius: 10,
    top: 7,
    left: 10,
  },
  rect2: {
    width: '94%',
    height: 100,
    backgroundColor: Colors.continercolor,
    borderRadius: 10,
    top: 20,
    left: 10,
  },

  rect3: {
    width: '94%',
    height: 108,
    backgroundColor: Colors.continercolor,
    borderRadius: 10,
    top: 35,
    left: 10,
  },
  rect4: {
    width: '94%',
    height: 80,
    backgroundColor: Colors.continercolor,
    borderRadius: 15,
    top: 50,
    left: 10,
  },

  textstyle: {
    color: Colors.secondaryText,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    paddingLeft: 30,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 52, 88, 0.06)',
    top: 3,
  },
  text1: {
    color: Colors.secondaryText,
    padding: 1,
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  text2: {
    color: Colors.secondaryText,
    //padding:1,
    paddingLeft: 20,
  },
  text3: {
    fontSize: 15,
    color: Colors.backgroundcolor,
    fontWeight: 'bold',
    left: 60,
    top: 11,
  },
  buttonstyle: {
    width: 310,
    height: 40,
    backgroundColor: Colors.secondaryText,
    borderRadius: 10,
    left: 30,
    top: 20,
  },
});
