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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../config/colors';
import {Searchbar, Button, Divider, Card, Title} from 'react-native-paper';

const Services = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
     
        <View style={styles.header}>
          <TouchableOpacity
            style={{bottom: 5, left: 20}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              style={styles.iconItem}
              name="left"
              // size ={20}
              color={Colors.backgroundcolor}
            />
          </TouchableOpacity>
          <View style={{width: 148, height: 47, paddingLeft: 110}}>
            <Image
              style={{ width: 45, height: 45, tintColor: '#fff'}}
              source={require('../Assets/Images/Home.png')}
            />
          </View>
          <Text style={styles.text}>HOME SERVE</Text>
        </View>

        <View style={{backgroundColor: Colors.primarycolor, fontSize: 30}}>
          <View style={styles.Searchbar}>
            <Searchbar
              style={styles.searchStyle}
              placeholder="Search for a service"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
        </View>
        <ScrollView>
        <View style={styles.appbarcontainer}>
          <View style={styles.banner}>
            <Image
              resizeMode="cover"
              style={{borderRadius: 16,marginLeft:15}}
              source={require('../Assets/Images/Mask5.png')}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                fontSize: 20,
                left: 80,
                bottom: 75,
              }}>
              AIR CONDITIONER
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                fontSize: 20,
                left: 80,
                bottom: 75,
              }}>
              SERVICE & REPAIR
            </Text>
          </View>
        </View>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity style={styles.buttonstyle}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="brightness-percent"
              size={20}
              color={Colors.backgroundcolor}
            />
            <Text style={styles.buttonText}>Upto 50% off on AC services</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categorycontainer}>
          <TouchableOpacity style={styles.categorybtn} 
          
          onPress={() => {navigation.navigate('AcServicesub',{head:'AC Service'});}}
          >
            <View style={styles.categoryicon}>
              <Image source={require('../Assets/Images/Service.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {navigation.navigate('AcServicesub',{head:'AC Repair'});}}
          >
            <View style={styles.categoryicon}>
              <Image source={require('../Assets/Images/Repair.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {navigation.navigate('AcServicesub',{head:'AC Installation / Unistallation'});}}
          >
            <View style={styles.categoryicon}>
              <Image source={require('../Assets/Images/Installation.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.categorycontainer}>
          <TouchableOpacity style={styles.categorybtn} 
           onPress={() => {navigation.navigate('AcServicesub',{head:'AC Gas Charging'});}}
          >
            <View style={styles.categoryicon}>
              <Image source={require('../Assets/Images/Charging.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn} onPress={() => {}}>
            <View style={styles.categoryicon}>
              <Image source={require('../Assets/Images/Looking.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categorybtn}
            onPress={() => {}}></TouchableOpacity>
        </View>
        <View style={{left: '4%', right: '4%'}}>
          <View
            style={{
              backgroundColor: Colors.continercolor,
              borderRadius: 15,
              height: 140,
              borderWidth:.25,
              width: '92%',
              marginBottom:20
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
             AC servicing and repair includes
            </Text>
            <ScrollView horizontal={true}>
             
              <View style={{flexDirection:"row",paddingLeft:10,paddingRight:45}}>
                <Card style={{marginTop:10,width:280,elevation:0,borderRadius:15,height:70}}>
                  <Card.Content>
                    <Title style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      1   &nbsp;
                      <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                        
                      Highly trained professionals
                      </Text>
                    </Title>
                  </Card.Content>
                </Card>
                <Card style={{marginTop:10,width:280,elevation:0,left:15,borderRadius:15,height:70}}>
                  <Card.Content>
                    <Title style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      2&nbsp;
                      <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                        
                      30 days service warranty
                      </Text>
                    </Title>
                  </Card.Content>
                </Card>
                <Card style={{marginTop:10,width:280,elevation:0,left:25,borderRadius:15,height:70}}>
                  <Card.Content>
                    <Title style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      3&nbsp;
                      <Text style={{fontSize: 12, fontWeight: 'normal'}}>
                        
                      100% genuine spare parts
                      </Text>
                    </Title>
                  </Card.Content>
                </Card>
                <Card style={{marginTop:10,width:280,elevation:0,left:35,borderRadius:15,height:70}}>
                  <Card.Content>
                    <Title style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      4
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
    elevation: 1,
    backgroundColor: Colors.primarycolor,
  },
  buttonViewStyle: {
    left: '4%',
    right: '4%',
    top: 12,
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
  categorycontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  categoryicon: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'center',
    marginTop: 0,
  },

  categorybtn: {
    flex: 1,
    width: 15,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  banner: {
    width: '90%',
    height: 200,
    marginTop: -25,
    marginLeft: 12,
    marginRight: 20,
    borderRadius: 16,
    top: 30,
  },
  icon: {
    paddingTop: 13,
    paddingStart: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '900',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: 12,
    top:-4
  },
  searchStyle: {
    height: 40,
    top: 5,

    borderRadius: 10,
    marginTop: 0,
    marginBottom: 12,
    marginStart: 10,
    marginEnd: 15,
  },
  appbarcontainer: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.primarycolor,
    marginLeft: 0,
    borderBottomEndRadius: 12,
    borderBottomLeftRadius: 12,
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
    left: 5,
    top: 13,
  },
  cardTitle: {
    marginTop: 10,
    color: Colors.primarycolor,
    fontWeight: 'bold',
    fontSize: 15,
    left: 35,
  },
  Searchbar: {
    marginTop: 5,
    marginBottom: 1,
    paddingBottom: -10,
    paddingTop: 2,
  },
  cardView: {
    marginTop: 10,
    width: 338,
    height: 147,
    left: 12,
    bottom: 8,
    borderRadius: 26,

    backgroundColor: '#F5F5F5',
  },
  buttonstyle: {
    backgroundColor: '#6FCF97',
    height: 45,
    width: '92%',
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
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
export default Services;
