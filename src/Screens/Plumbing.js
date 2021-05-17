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
export default Plumbing = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.backgroundcolor}}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{paddingLeft: 20, top: 7}}
            onPress={() => navigation.goBack(null)}>
            <AntDesign
              name="left"
              size={20}
              color={Colors.backgroundcolor}></AntDesign>
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
        <View style={styles.mainView}>
          <Image
            source={require('../Assets/plumbing/mainImage.png')}
            style={{
              height: 225,
              width: 335,
              left: 11,
              top: 5,
              position: 'absolute',
              borderRadius: 7,
            }}
          />
          <Text style={styles.text2}>PLUMBING WORKS</Text>
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
              source={require('../Assets/plumbing/per.png')}
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
              Upto 50% off on Plumbing Works
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{top: 15, height: 400}}>
          {/* firsr row */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {
                navigation.navigate('Plumbingsub', {head: 'Basin & Sink'});
              }}>
              <Image
                source={require('../Assets/plumbing/basin.png')}
                style={{}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {
                navigation.navigate('Plumbingsub', {head: 'Tap & Mixer'}); }}
                >
              <Image
                source={require('../Assets/plumbing/tap.png')}
                style={{}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => {
                navigation.navigate('Plumbingsub', {head: 'Bath Fitting'});
              }}>
              <Image
                source={require('../Assets/plumbing/Bathfitting.png')}
                style={{}}
              />
            </TouchableOpacity>
          </View>
          {/* second row */}
          <View style={{top: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('Plumbingsub', {head: 'Motor'});
                }}>
                <Image
                  source={require('../Assets/plumbing/motor.png')}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.continer}
                onPress={() => {
                  navigation.navigate('Plumbingsub', {head: 'Toilet'});
                }}>
                <Image
                  source={require('../Assets/plumbing/toilet.png')}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.continer}>
                <Image
                  source={require('../Assets/plumbing/plus.png')}
                  style={{}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{left: 7, width: 375, bottom: 120}}>
          <View style={styles.rectangle}>
            <Text style={styles.text3}> Plumbing Services includes </Text>
            <ScrollView horizontal={true} style={{top: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 10,
                  paddingRight: 35,
                }}>
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
                        Doorstep Service
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
        {/* <View style={{height: 20, width: '100%'}}></View> */}
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
    tintColor: Colors.primarycolor,
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
    color: Colors.primarycolor,
    fontSize: 12,
    textAlign: 'center',
  },
  rectangle: {
    backgroundColor: Colors.continercolor,
    borderRadius: 15,
    height: 130,
    marginLeft:20,
    width: '92%',
    borderWidth:.25
  },
  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primarycolor,
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
