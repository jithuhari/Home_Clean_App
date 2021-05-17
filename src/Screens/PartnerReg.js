import React,{useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Colors from '../config/colors';

const PartnerReg = () => {

  const navigation = useNavigation();

  const [mobno, setMobileno] = useState('')
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View>
        {/*headerview */}
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
         Register as a partner
        </Text>
      </View>
      </View>
      <View style={styles.mainView}>
        <Text
          style={{
            color: Colors.secondaryText,
            fontWeight: 'bold',
            left: 27,
            marginTop: 15,
          }}>
          Mobile Number
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="9876554321"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
          left={25}
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={(num) => setMobileno(num)}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: Colors.secondaryText}}>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterPartner')}>
              <AntDesign
                style={styles.iconItem}
                name="arrowright"
                size={20}
                color={Colors.backgroundcolor}
              />
            </TouchableOpacity>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PartnerReg;
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
  mainView: {
    flexDirection: 'column',
    top:20,
    height: 700,
  },
  textInput: {
    marginTop: 5,
    width: 300,
    height: 40,
    elevation: 0,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.secondaryText,
  },
  button: {
    backgroundColor: Colors.primarycolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 60,
    left: 130,
    elevation: 3,
  },
});
