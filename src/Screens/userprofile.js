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
import IonIcons from 'react-native-vector-icons/Ionicons';
import {TextInput, Button} from 'react-native-paper';

const Profile = ({navigation}) => {
  // const [text, onChangeText] = React.useState(null);
  // const [number, onChangeNumber] = React.useState(null);
  // const [email ,onChangeEmail] =React.useState(null);
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={{bottom: 5, top: 10, left: 5}}
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
        <View
          style={{
            flex: 2,
            backgroundColor: Colors.primarycolor,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}>
          <Text style={styles.text1}>Profile</Text>
        </View>
        <View style={styles.container}>
          <Image source={require('../Assets/profile1.png')} style={{top: 20}} />
          {/* <IonIcons 
             name="person-circle-outline" 
             size={100}
             color={{color:'#333458 '}}
              /> */}
        </View>
        <SafeAreaView>
          <View style={styles.containers}>
            <Text
              style={{
                marginLeft: 15,
                fontWeight: 'bold',
                fontSize: 16,
                color: Colors.secondaryText,
              }}>
              Name
            </Text>
            <View style={styles.SectionStyle}>
              <Text style={{color: '#BDBDBD', marginLeft: 15, marginTop: 10}}>
                John Smith
              </Text>
            </View>
          </View>
          <View style={styles.containers}>
            <Text
              style={{
                marginLeft: 15,
                fontWeight: 'bold',
                fontSize: 16,
                color: Colors.secondaryText,
              }}>
              Mobile Number
            </Text>
            <View style={styles.SectionStyle}>
              <Text style={{color: '#BDBDBD', marginLeft: 15, marginTop: 10}}>
                9876554321
              </Text>
            </View>
          </View>
          <View style={styles.containers}>
            <Text
              style={{
                marginLeft: 15,
                fontWeight: 'bold',
                fontSize: 16,
                color: Colors.secondaryText,
              }}>
              Email ID
            </Text>
            <View style={styles.SectionStyle}>
              <Text style={{color: '#BDBDBD', marginLeft: 15, marginTop: 10}}>
                jsmith@example.com
              </Text>
            </View>
          </View>

          <View style={styles.container2}>
            <View style={{borderRadius: 10,paddingRight:20}}>
              <Button
                color={Colors.primarycolor}
                mode="outlined"
                onPress={() => console.log('Pressed')}>
                Cancel
              </Button>
            </View>
            <View style={{borderRadius: 10,paddingRight:25}}>
              <Button
                color={Colors.primarycolor}
                mode="contained"
                onPress={() => console.log('Pressed')}>
                Update
              </Button>
            </View>
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
    elevation: 0,
    backgroundColor: Colors.primarycolor,
    // borderBottomRightRadius: 15,
    // borderBottomLeftRadius: 15,
  },
  containers: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: Colors.backgroundcolor,
    borderWidth: 0.5,
    borderColor: '#5F5F82',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    // textAlign:'center',
    //alignItems:'center',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: 10,
  },
  text1: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
  },

  container: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  container2: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },

});
export default Profile;
