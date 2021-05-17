import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';

// import Modal from 'react-native-modal';

const Address = ({navigation}) => {

  
  const [name, setName] = useState ('');
  const [location, setLocation] = useState('')
  const [houseno, setHnum] = useState('');
  const [streetAdd, setStreetAdd] = useState ('');
  const [mobno, setMobileno] = useState('')
  const [saveAdd, setSaveAdd] = useState('');

  //   const [isModalVisible, setModalVisible] = useState(true);
  //   const toggleModal = () => {
  //     setModalVisible(!isModalVisible);
  //   };


  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
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
          Enter your Address
        </Text>
      </View>
      <ScrollView style={{height: 700}}>
        <View style={styles.mainView}>
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: 'bold',
              left: 27,
              marginTop: 15,
            }}>
            Name
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Fullname"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            left={35}
            onChangeText={(name) => setName(name)}></TextInput>
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: 'bold',
              left: 27,
              marginTop: 15,
            }}>
            Location/Society
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Location/Society name"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            left={35}
            onChangeText={(loc) => setLocation(loc)}></TextInput>
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: 'bold',
              left: 27,
              marginTop: 15,
            }}>
            House/Flat No.
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your House/flat No"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            left={35}
            onChangeText={(hum) => setHnum(hum)}></TextInput>
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: 'bold',
              left: 27,
              marginTop: 15,
            }}>
            Street Address
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Street Address"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            left={35}
            onChangeText={(add) => setStreetAdd(add)}></TextInput>
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: 'bold',
              left: 27,
              marginTop: 15,
            }}>
            Mobile No.
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your 10 digit mobile no"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            left={35}
            keyboardType="number-pad"
            maxLength={10}
            onChangeText={(num) => setMobileno(num)}></TextInput>
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: 'bold',
              left: 27,
              marginTop: 15,
            }}>
            Save Address As
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Save Address as Home,Office,etc.."
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            left={35}
            onChangeText={(save) => setSaveAdd(save)}></TextInput>
          <View
            style={{
              bottom: 35,
              flexDirection: 'row',
              marginHorizontal: 3,
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity style={styles.button1}>
              <Text style={{color: Colors.Appbar}}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={{color: Colors.backgroundcolor}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* modal */}
      {/* <Modal
        isVisible={isModalVisible}
        hasBackdrop={true}
        backdropOpacity={0}
        style={{backgroundColor: 'rgba(52, 52, 52, alpha)'}}
        //   onBackdropPress={()=>{toggleModal();selecta()}}
      > */}
      <View style={{bottom: 90, left: '4%', right: '4%'}}>
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
              navigation.navigate('Shedule');
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
      {/* </Modal> */}
      {/* modal end */}
    </View>
  );
};
export default Address;
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
    color: Colors.secondaryText,
    paddingLeft: 10,
    paddingTop: 17,
  },
  mainView: {
    flexDirection: 'column',
    height: 700,
  },
  textInput: {
    marginTop: 5,
    width: 300,
    height: 40,
    elevation: 0,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(51, 52, 88, 0.06)',
  },
  button1: {
    backgroundColor: Colors.continercolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 60,
    left: 130,
  },
  button2: {
    backgroundColor: Colors.primarycolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    top: 60,
    left: 153,
    alignItems: 'center',
    // elevation: 2,
  },
});
