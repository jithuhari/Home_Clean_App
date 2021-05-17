import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Colors from '../config/colors';

import {Searchbar, Card, Title} from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native';

import Modal from 'react-native-modal';
import {BottomSheet} from 'react-native-elements/dist/bottomSheet/BottomSheet';
import { Value } from 'react-native-reanimated';

export default Fan = ({route,navigation}) => {

  const {head} =route.params;


  const [isModalVisible, setModalVisible] = useState(false);
  const [select ,setremove] =useState("Select");


  const remove = () => {
    
    setremove("Remove");
   
   
    
  }
  const selecta = () => {
    
    setremove("Select");
   
   
    
  }
 
 
 
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        backgroundColor: Colors.backgroundcolor,
        height: '100%',
        width: '100%',
      }}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{paddingLeft: 10, top: 7}}
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
      <View
        style={{
          backgroundColor: Colors.primarycolor,
          paddingLeft: 18,
          paddingRight: 16,
          height: 75,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
        }}>
        <Searchbar
          placeholder="Search for a service"
          style={{borderRadius: 10, height: 40, width: '99%'}}
        />
        <Text
          style={{
            fontSize: 18,
            color: Colors.backgroundcolor,
            fontWeight: 'bold',
            top: 5,

            alignSelf: 'center',
          }}>
          {/* {JSON.stringify(head)} */}
          {head}
        </Text>
      </View>
      <View style={{left: '4%', right: '4%', top: 15, height: 80}}>
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
      <View
        style={{
          backgroundColor: Colors.continercolor,
          width: '92%',
          left: '4%',
          right: '4%',
          height: 200,
          borderRadius: 15,
          top: 15,
        }}>
        <Text
          style={{
            color: Colors.primarycolor,
            fontSize: 16,
            top: 10,
            left: 7,
            fontWeight: 'bold',
            borderBottomColor: 'rgba(51, 52, 88, 0.06)',
            borderBottomWidth: 1,
          }}>
          {head} Repair
        </Text>
        <View style={{top: 20}}>
          <View View style={{flexDirection: 'row'}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>
              Featccncncn ncjc cncjnj slvhnfvskak
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>Featccncncn cncjnj slvhnfvskak</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>
              Featccncncn ncjc njnkvjdf cncjnj slskak
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>Featccncncn slvhnfvskak</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', right: 15}}>
          <TouchableOpacity style={styles.button2} onPress={()=>{toggleModal();remove(isModalVisible)}}  >
            <Text style={styles.buttonText1}>{select}</Text>
            {/* modal */}
            <Modal
              isVisible={isModalVisible}
              hasBackdrop={true}
              backdropOpacity={0}
              style={{backgroundColor: 'rgba(52, 52, 52, alpha)'}}
              onBackdropPress={()=>{toggleModal();selecta()}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(95, 95, 130, 1)',
                  width: '100%',
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  bottom: 40,
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
                  onPress={() => {navigation.navigate('Address');}}
                  >
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
            </Modal>
            {/* modal end */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{left: '4%', right: '4%', top: 40}}>
        <View
          style={{
            backgroundColor: Colors.continercolor,
            borderRadius: 15,
            height: 140,
            width: '92%',
            borderWidth:.25
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
            Plumbing Services includes
          </Text>
          <ScrollView horizontal={true}>
            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 35}}>
              <Card
                style={{
                  marginTop: 10,
                  width: 280,
                  elevation: 0,
                  borderRadius: 15,
                  height: 70,
                }}>
                <Card.Content>
                  <Title
                    style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                    1&nbsp;
                    <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                      Highly trained professionals
                    </Text>
                  </Title>
                </Card.Content>
              </Card>
              <Card
                style={{
                  marginTop: 10,
                  width: 280,
                  elevation: 0,
                  left: 15,
                  borderRadius: 15,
                  height: 70,
                }}>
                <Card.Content>
                  <Title
                    style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                    2&nbsp;
                    <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                      Experienced, trained, and Background verified Partners
                    </Text>
                  </Title>
                </Card.Content>
              </Card>
              <Card
                style={{
                  marginTop: 10,
                  width: 280,
                  elevation: 0,
                  left: 25,
                  borderRadius: 15,
                  height: 70,
                }}>
                <Card.Content>
                  <Title
                    style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                    3&nbsp;
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
  textdot: {
    paddingLeft: 18,
    color: Colors.secondaryText,
  },

  text3: {
    color: Colors.secondaryText,
    flex: 1,
    paddingLeft: 1,
    fontSize: 14,
  },
  buttonText1: {
    color: Colors.backgroundcolor,
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: Colors.primarycolor,
    width: '30%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 5,
    top: 45,
    // left: 190,
  },
});
