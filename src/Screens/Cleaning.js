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

const Cleaning = ({navigation}) => {
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

          <View style={{width: 148, height: 70, paddingLeft: 110,top:15}}>
            <Image
              style={{ width: 45, height: 45, tintColor: '#fff'}}
              source={require('../Assets/appbar.png')}
            />
          </View>
          <Text style={styles.text}>HOME SERVE</Text>
        </View>
        <View style={{backgroundColor: Colors.primarycolor,height:58}}>
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
              source={require('../Assets/cleaning/banner.png')}
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
              Upto 50% off on Cleaning services
            </Text>
          </TouchableOpacity>
        </View>

        <Divider />
        <View style={styles.categorycontainer}>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {
            navigation.navigate('HomeSanitization', {head: 'Home Sanitization'}); }}
          >
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/cleaning/homesanitization.jpeg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {
            navigation.navigate('HomeSanitization', {head: 'Full House Deep Cleaning'}); }}
          >
            <View style={styles.categoryicon}>
              <Image source={require('../Assets/cleaning/deepcleaning.jpeg')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {
            navigation.navigate('HomeSanitization', {head: 'Full House Basic Cleaning'}); }}
          >
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/cleaning/basiccleaning.jpeg')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.categorycontainer}>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {
            navigation.navigate('HomeSanitization', {head: 'Bathroom Cleaning'}); }}
          >
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/cleaning/bathroomcleaning.jpeg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {
            navigation.navigate('HomeSanitization', {head: 'Kitchen Cleaning'}); }}
          >
            <View style={styles.categoryicon}>
              <Image
                source={require('../Assets/cleaning/kitchencleaning.jpeg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {
            navigation.navigate('HomeSanitization', {head: 'Sofa Cleaning'}); }}
          >
            <View style={styles.categoryicon}>
              <Image source={require('../Assets/cleaning/sofacleaning.jpeg')} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{left: '4%', right: '4%', top: 20,height:140}}>
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
              }}>
              Cleaning service includes
            </Text>
            <ScrollView horizontal={true}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 10,
                  paddingRight: 45,
                  top: 5,
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
                      1 &nbsp;
                      <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                        Use of Top Quality Specialized and Safe Chemicals.
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
                      2 &nbsp;
                      <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                        Use of Mechanical and Professional Equipments{' '}
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
                      3 &nbsp;
                      <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                        Experienced ,Trained and Background Verified Partners
                      </Text>
                    </Title>
                  </Card.Content>
                </Card>
                <Card
                  style={{
                    marginTop: 10,
                    width: 280,
                    elevation: 0,
                    left: 35,
                    borderRadius: 15,
                    height: 70,
                  }}>
                  <Card.Content>
                    <Title
                      style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      4 &nbsp;
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
  cardStyle2: {
    marginTop: 5,
    backgroundColor: Colors.backgroundcolor,
    borderRadius: 16,
    left: 15,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginRight: 10,
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
    paddingLeft: 10,
  },
  searchStyle: {
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
    width: 360,
    height: 147,
    left: 12,
    borderRadius: 16,
    backgroundColor: '#E5E5E5',
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
    color: Colors.secondaryText,
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
export default Cleaning;
