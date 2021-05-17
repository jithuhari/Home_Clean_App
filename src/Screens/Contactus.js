import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import {Button} from 'react-native-paper';

import IonIcons from 'react-native-vector-icons/Ionicons';

const Contactus = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity
            style={{bottom: 5,top:10,left:5}}
            onPress={() => navigation.goBack(null)}>
            <AntDesign
              style={styles.iconItem}
              name="left"
              size={20}
              color={'#fff'}
            />
          </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            top: 8,
          }}>
          <Image
            source={require('../Assets/appbar.png')}
            style={{
              tintColor: '#fff',
              height: 45,
              width: 45,
            }}
          />
          <Text style={{color: '#fff', top: 11, fontWeight: 'bold', left: 6}}>
            Home Serve
          </Text>
        </View>
      </View>
        <View style={{flex: 2, backgroundColor: Colors.primarycolor,borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
          <Text style={styles.profiletxt}>Profile</Text>
        </View>

        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <View>
              <Text style={styles.text1}>
                In case you have any questions or suggestions,
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.text2}>
                You can reach out to us by any of the below means:
              </Text>
            </View>
          </View>

          <View style={styles.container}>
            <IonIcons name="call" size={30} color={{color: '#36375B '}} />
            <Text style={{color: '#5F5F82'}}>Call us on</Text>
            <Text style={{color: '#333458', fontWeight: 'bold', fontSize: 16}}>
              +919876554321
            </Text>
          </View>
          <View style={styles.container}>
            <IonIcons name="mail" size={30} color={{color: '#333458 '}} />
            <Text style={{color: '#5F5F82'}}>Email us on</Text>
            <Text style={{color: '#333458', fontWeight: 'bold', fontSize: 16}}>
              cserve@homeserve.in
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    //padding:2,
    // paddingLeft:2,
    elevation: 1,
    // borderBottomColor:'grey',
    backgroundColor: Colors.primarycolor,
    // borderBottomLeftRadius:15,
    // borderBottomRightRadius:15
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    // textAlign:'center',
    //alignItems:'center',
    fontWeight: 'bold',
    color: Colors.text,
    paddingLeft: 10,
  },
  profiletxt: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
  },
  text1: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
    color: '#5F5F82',
  },
  text2: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'normal',
    color: Colors.secondaryText,
  },

  container: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  button: {
    backgroundColor: Colors.Appbar,
    width: '40%',
    height: 40,
  },
  textInput: {
    paddingTop: 180,
    textAlign: 'center',
    color: Colors.text,
    fontSize: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  containers: {
    flex: 4,
    flexDirection: 'column',
  },
});
export default Contactus;
