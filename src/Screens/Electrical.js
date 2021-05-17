import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import {Searchbar,Card,Title} from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';

import Colors from '../config/colors';

export default ele = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.backgroundcolor}}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{paddingLeft: 20, top: 7}} onPress={() => navigation.goBack(null)}>
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
      <View
        style={{
          backgroundColor: Colors.primarycolor,
          paddingLeft: 18,
          paddingRight: 16,
          height: 47,
        }}>
        <Searchbar
          placeholder="Search for a service"
          style={{borderRadius: 10, height: 40, width: '99%'}}
        />
      </View>
      <ScrollView style={{height: 600}}>
        <View
          style={{
            backgroundColor: Colors.primarycolor,
            width: '100%',
            height: 240,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}>
          <Image
            source={require('../Assets/elew.png')}
            style={{left: '4%', right: '4%', top: 5, position: 'absolute'}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: Colors.backgroundcolor,
              fontSize: 22,
              left: 123,
              top: 160,
            }}>
            Electrical works
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
              source={require('../Assets/per.png')}
              style={{height: 24, width: 24, top: 20, left: 15}}
            />
            <Text
              style={{
                fontSize: 14,
                color: Colors.backgroundcolor,
                fontWeight: 'bold',
                left: 25,
                top: 21,
              }}>
              Upto 50% off on Electrical Works
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{top: 15, height: 400}}>
          {/* firsr row */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={styles.continer} onPress={() => {navigation.navigate('Fan',{head:'Switch & Socket'});}}>
              <Image
                source={require('../Assets/switch.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Switch & Socket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continer} onPress={() => {navigation.navigate('Fan',{head:'Fan'});}}>
              <Image source={require('../Assets/fan.png')} style={{}} />
              <Text style={(styles.text, {top: 5,color:colors.primarycolor})}>Fan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {navigation.navigate('Fan',{head:'Room Heater'});}}>
              <Image source={require('../Assets/room.png')} style={{}} />
              <Text style={styles.text}>Room Heater </Text>
            </TouchableOpacity>
          </View>
          {/* second row */}
          <View style={{top: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity style={styles.continer} onPress={() => {navigation.navigate('Fan',{head:'Light'});}}>
                <Image
                  source={require('../Assets/light.png')}
                  style={styles.img}
                />
                <Text style={styles.text}>Light</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.continer} onPress={() => {navigation.navigate('Fan',{head:'Wiring'});}}>
                <Image source={require('../Assets/wiring.png')} style={{}} />
                <Text style={(styles.text, {top: 5,color:Colors.primarycolor})}>Wiring</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {navigation.navigate('Fan',{head:'MCB & Fuse'});}}>
                <Image source={require('../Assets/mcb.png')} style={{}} />
                <Text style={styles.text}>MCB & Fuse </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* thired row */}
          <View style={{top: 30, paddingLeft: 5}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.continer} onPress={() => {navigation.navigate('Fan',{head:'Inverter & stabilizer'});}}>
                <Image
                  source={require('../Assets/inverter.png')}
                  style={styles.img}
                />
                <Text style={styles.text}>Inverter &</Text>
                <Text style={styles.text}>stabilizer </Text>
              </TouchableOpacity>
              <View style={{paddingLeft: 10}}>
                <TouchableOpacity style={styles.continer}>
                  <Ionicons
                    name={'add-sharp'}
                    size={55}
                    color={Colors.primarycolor}
                  />
                  <Text style={styles.text}>Looking for</Text>
                  <Text style={styles.text}>something else </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{left: '4%', right: '4%'}}>
          <View
            style={{
              backgroundColor: Colors.continercolor,
              borderRadius: 15,
              height: 140,
              borderWidth:.25,
              width: '92%',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: Colors.primarycolor,
                left: 15,
                top: 10,
                marginBottom:10
              }}>
              Electrical Services includes
            </Text>
            <ScrollView horizontal={true}>
             
              <View style={{flexDirection:"row",paddingLeft:10,paddingRight:35}}>
                <Card style={{marginTop:10,width:280,elevation:0,borderRadius:15,height:70}}>
                  <Card.Content>
                    <Title style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      1   
                      <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                        
                      Doorstep Service
                      </Text>
                    </Title>
                  </Card.Content>
                </Card>
                <Card style={{marginTop:10,width:280,elevation:0,left:15,borderRadius:15,height:70}}>
                  <Card.Content>
                    <Title style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      2
                      <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                        
                      Experienced, trained, and Background verified Partners
                      </Text>
                    </Title>
                  </Card.Content>
                </Card>
                <Card style={{marginTop:10,width:280,elevation:0,left:25,borderRadius:15,height:70}}>
                  <Card.Content>
                    <Title style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      3
                      <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                        
                        Lowest Priced Quotes
                      </Text>
                    </Title>
                  </Card.Content>
                </Card>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{height: 20, width: '100%'}}></View>
        <View style={{margin:35}}></View>
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
  continer: {
    backgroundColor: Colors.continercolor,
    height: 112,
    width: 112,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 12,
    color:Colors.primarycolor,top:5
  },
});
