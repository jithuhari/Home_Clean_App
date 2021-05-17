import React from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../config/colors';
export default Appliancesrepair = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.backgroundcolor}}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{paddingLeft: 20, top: 7}}>
            <AntDesign
              name="left"
              size={20}
              color={Colors.backgroundcolor}
              onPress={() => navigation.goBack(null)}
              ></AntDesign>
          </TouchableOpacity>
          <Image
            source={require('../Assets/appbar.png')}
            style={styles.image}
          />
          <Text style={styles.text1}> HOME SERVE </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: Colors.primarycolor,
          paddingLeft: 18,
          paddingRight: 16,
          height: 47,
        }}>
        <Searchbar
          placeholder="Search for a service"
          style={{borderRadius: 10, height: 40, width: '100%'}}
        />
      </View>
      <ScrollView style={{height: 600}}>
        {/** view for main image */}

        <View style={styles.mainView}>
          <Image
            style={{width: 320, left: 20, top: 10, borderRadius: 10}}
            source={require('../Assets/appliancerepair/main.png')}
          />
          <Text
            style={{
              color: Colors.backgroundcolor,
              bottom: 50,
              fontSize: 22,
              fontWeight: 'bold',
              alignSelf:'center'
            }}>
            Appliances Repair
          </Text>
        </View>

        <View style={{left: '4%', right: '4%', top: 15, height: 90}}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.green,
              height: 64,
              width: '92%',
              borderRadius: 15,
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 30, height: 30, top: 15, left: 15}}
              source={require('../Assets/appliancerepair/Vector.png')}
            />
            <Text
              style={{
                fontSize: 14,
                color: Colors.backgroundcolor,
                fontWeight: 'bold',
                left: 25,
                top: 21,
              }}>
              Upto 50% off on Appliance Repair Sevices
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{top: 15, height: 400}}>
          {/* firsr row */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={styles.continer}
            onPress={() => {navigation.navigate('Appliancesubpage',{head:'Microwave'});}}
            >
              <Image
                source={require('../Assets/appliancerepair/microwave.png')}
                style={{}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.continer}
             onPress={() => {navigation.navigate('Appliancesubpage',{head:'Refrigerator'});}}
            >
              <Image
                source={require('../Assets/appliancerepair/refrigerator.png')}
                style={{}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              //onPress={() => navigation.navigate('Plumbing')}
              onPress={() => {navigation.navigate('Appliancesubpage',{head:'Water Filter'});}}
            >
              <Image
                source={require('../Assets/appliancerepair/waterfilter.png')}
                style={{}}
              />
            </TouchableOpacity>
          </View>
          {/* second row */}
          <View style={{top: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity style={styles.continer}
               onPress={() => {navigation.navigate('Appliancesubpage',{head:'TV'});}}
              >
                <Image
                  source={require('../Assets/appliancerepair/tv.png')}
                  style={styles.img}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.continer}
               onPress={() => {navigation.navigate('Appliancesubpage',{head:'Washing Machine'});}}
              >
                <Image
                  source={require('../Assets/appliancerepair/washingmachine.png')}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.continer}
                // onPress={() => navigation.navigate('plumbing')}
              >
                <Image
                  source={require('../Assets/appliancerepair/q.png')}
                  style={{}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{height: 20, width: '100%'}}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 85,
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
  image: {
    height: 45,
    width: 45,
    tintColor: Colors.backgroundcolor,
    left: 80,
    top: 2,
  },
  text1: {
    fontSize: 15,
    color: Colors.backgroundcolor,
    fontWeight: 'bold',
    left: 85,
    top: 11,
  },
  mainView: {
    backgroundColor: Colors.primarycolor,
    width: '100%',
    height: 240,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  text2: {
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    fontSize: 22,
    left: 85,
    top: 160,
    justifyContent: 'center',
  },
  img: {
    tintColor: '#5F5F82',
  },
  continer: {
    backgroundColor: Colors.rectangle,
    height: 112,
    width: 112,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.Appbar,
    fontSize: 12,
    textAlign: 'center',
  },
  rectangle: {
    backgroundColor: Colors.rectangle,
    borderRadius: 15,
    height: 130,
    width: '92%',
  },
  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.Appbar,
    left: 15,
    top: 10,
  },
  card: {
    marginTop: 10,
    width: 280,
    height: 80,
    elevation: 0,
    borderRadius: 15,
    left: 7,
  },
  card1: {
    marginTop: 10,
    width: 280,
    height: 80,
    elevation: 0,
    borderRadius: 15,
    left: 15,
  },
  card2: {
    marginTop: 10,
    width: 260,
    height: 80,
    elevation: 0,
    borderRadius: 15,
    left: 25,
  },
});
