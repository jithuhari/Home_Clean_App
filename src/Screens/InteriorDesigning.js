import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import {Searchbar, Button, Divider, Card, Title} from 'react-native-paper';
import { colors } from 'react-native-elements';

const InteriorDesigning = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      
        <View style={styles.header}>
          <TouchableOpacity
            style={{bottom: 5, left: 20}}
            onPress={() => navigation.goBack(null)}>
            <AntDesign
              style={styles.iconItem}
              name="left"
              size={20}
              color={Colors.backgroundcolor}
            />
          </TouchableOpacity>

          <View style={{width: 148, height: 70, paddingLeft: 80}}>
            <Image
              style={{
                width: 45,
                height: 45,
                tintColor: '#fff',
                left: 40,
                top: 10,
              }}
              source={require('../Assets/appbar.png')}
            />
          </View>
          <Text style={styles.text}>HOME SERVE</Text>
        </View>
        <View style={{backgroundColor: Colors.primarycolor}}>
          <Searchbar
            style={styles.searchStyle}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <ScrollView>
        <View style={styles.appbarcontainer}>
          <View style={styles.banner}>
            <Image
              resizeMode="cover"
              style={{borderRadius: 16}}
              source={require('../Assets/interiordesigning/interior.png')}
            />
          </View>
        </View>

        <View style={styles.buttonViewStyle}>
          <TouchableOpacity style={styles.buttonstyle}>
            <Image
              source={require('../Assets/cleaning/offer.png')}
              style={{height: 24, width: 24, top: 20, left: 15}}
            />
            <Text style={styles.buttonText}>
              Upto 50% off on Interior Designing services
            </Text>
          </TouchableOpacity>
        </View>

        <Divider />
        <View style={styles.categorycontainer}>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {navigation.navigate('Interiorsub',{head:'Complete House'});}}
          >
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/interiordesigning/completehome.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} 
          onPress={() => {navigation.navigate('Interiorsub',{head:'Kitchen'});}}
          >
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/interiordesigning/kitchen.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} 
          onPress={() => {navigation.navigate('Interiorsub',{head:'Furnishing & Decor'});}}
          >
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/interiordesigning/furnishing.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.categorycontainer}>
          <TouchableOpacity style={styles.categorybtn} 
          onPress={() => {navigation.navigate('Interiorsub',{head:'wardrobe'});}}
          >
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/interiordesigning/wardrobe.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} 
          onPress={() => {navigation.navigate('Interiorsub',{head:'painting & Wallpaper'});}}
          >
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/interiordesigning/painting.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} onPress={() => {}}>
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/interiordesigning/somethingelse.png')}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{left: '4%', right: '4%', top: 20,height:140}}>
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
            Interior Designing includes
          </Text>
          <ScrollView horizontal={true}>
            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 35,top:5}}>
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
      <View style={{margin:25}}></View>
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
    elevation: 0,
    // borderBottomColor:'grey',
    backgroundColor: Colors.primarycolor,
    // justifyContent:'center'
  },
  buttonViewStyle: {
    left: '4%',
    right: '4%',
    top: 15,
    height: 90,
  },
  cardContainer: {
    marginTop: 10,
    flex: 2,
  },
  cardStyle: {
    marginTop: 5,
    backgroundColor: Colors.backgroundcolor,
    borderRadius: 16,
    left: 15,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 6,
  },
  cardStyle1: {
    marginTop: 5,
    backgroundColor: Colors.backgroundcolor,
    borderRadius: 16,
    left: 15,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginRight: 36,
    marginLeft: 6,
  },

  categorycontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  categoryicon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorybtn: {
    flex: 1,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  banner: {
    width: '90%',
    height: 200,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 20,
    borderRadius: 16,
  },

  text: {
    fontSize: 15,
    fontWeight: '900',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: 23,
    top:-6
  },
  searchStyle: {
    borderRadius: 16,
    marginStart: 10,
    marginEnd: 15,
  },
  searchStyle1: {
    borderRadius: 16,
    marginStart: 10,
    marginEnd: 15,
  },

  appbarcontainer: {
    width: '100%',
    height: 230,
    backgroundColor: Colors.primarycolor,
    borderBottomEndRadius: 15,
    borderBottomStartRadius:15
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    color: Colors.backgroundcolor,
    fontSize: 14,
    fontWeight: 'bold',
    left: 25,
    top: 21,
  },
  cardTitle: {
    marginTop: 10,
    color: Colors.primarycolor,
    fontWeight: 'bold',
    fontSize: 20,
    left: 8,
  },
  cardView: {
    marginTop: 10,
    width: '92%',
    height: 130,
    left: '4%',
    right:'4%',
    borderRadius: 16,
    backgroundColor: Colors.continercolor,
  },
  buttonstyle: {
    backgroundColor: '#6FCF97',
    height: 64,
    width: '92%',
    borderRadius: 15,
    flexDirection: 'row',
  },
  textInput: {
    paddingTop: 180,
    textAlign: 'center',
    color: Colors.backgroundcolor,
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
export default InteriorDesigning;
