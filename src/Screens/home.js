import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';

import {Searchbar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {SliderBox} from 'react-native-image-slider-box';
import {Rating, AirbnbRating} from 'react-native-elements';

import colors from '../config/colors';
import Colors from '../config/colors';



import AccordionView from '../components/Collapsible'

export default Home = ({navigation}) => {
  image = [
    require('../Assets/1.png'),
    require('../Assets/2.png'),
    require('../Assets/3.png'),
  ];
  return (
    <View style={{height: '100%', width: '100%',backgroundColor:Colors.backgroundcolor}}>
      <View style={styles.header}>
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
          HOME SERVE
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            height: 370,
            width: '100%',
            backgroundColor: colors.primarycolor,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#fff'}}>Bangalore</Text>
                <FontAwesome
                  name={'angle-down'}
                  color="#fff"
                  style={{top: 5, left: 4}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 2,
                  paddingBottom: 2,
                }}>
                <MaterialCommunityIcons
                  name={'phone-in-talk'}
                  color="#fff"
                  style={{top: 5}}
                />
                <Text style={{color: '#fff'}}> +91 9876543256</Text>
              </View>
            </View>
          </View>
          <View style={{}}>
            <Searchbar
              placeholder="Search for a service"
              style={{borderRadius: 10, margin: 10, height: 40}}
            />
          </View>
          <View style={{borderBottomLeftRadius: 10,}}>
            <SliderBox
              images={image}
              autoplay={true}
              circleLoop
              ImageComponentStyle={{
                borderRadius: 15,
                // width: 20,
                marginTop: 5,
                borderRadius: 15,
                
             
              }}
              style={{
                start: '4%',
                right: '4%',
                width:'92%',
                top: 10,
                borderRadius: 15,
                height: 220,
                borderBottomLeftRadius:15
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                top: 35,
                padding: 0,
                margin: 0,
              }}
            />
          </View>
        </View>
        <View style={{top: 10, height: 248}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={styles.continer} onPress={() => navigation.navigate('Cleaning')}>
              <Image
                source={require('../Assets/clean.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Cleaning & Sanitization</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continer} onPress={() => navigation.navigate('AcServices')}>
              <Image source={require('../Assets/ac.png')} style={{}} />
              <Text style={(styles.text, {top: 5,color:colors.secondaryText})}>AC Service &</Text>
              <Text style={styles.text}> Repair</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.continer} onPress={() => navigation.navigate('Ele')}>
              <Image source={require('../Assets/ele.png')} style={{}} />
              <Text style={styles.text}>Electrical </Text>
              <Text style={styles.text}>Work </Text>
            </TouchableOpacity>
          </View>
          {/* second row */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: 10,
            }}>
            <TouchableOpacity style={styles.continer} onPress={() => navigation.navigate('Appliancesrepair')}>
              <Image source={require('../Assets/f.png')} style={{}} />
              <Text style={styles.text}>Appliance</Text>
              <Text style={styles.text}> Repair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continer} onPress={() => navigation.navigate('Plumbing')}>
              <Image source={require('../Assets/pu.png')} style={{}} />
              <Text style={(styles.text, {top: 5,color:colors.secondaryText})}>Plumbing</Text>
              <Text style={styles.text}> Work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continer} onPress={() => navigation.navigate('InteriorDesigning')}>
              <Image source={require('../Assets/in.png')} style={{}} />
              <Text style={styles.text}>Interior </Text>
              <Text style={styles.text}>Designing </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* second part */}
        <View>
          <View
            style={{
              backgroundColor: Colors.continercolor,
              height: 250,
              width: '94%',
              borderRadius: 15,
              left: '4%',
              right: '4%',
              top: 15,
              //backgroundColor:'blue'
            }}>
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 5}}>
              <Text
                style={{
                  color: Colors.primarycolor,
                  fontWeight: 'bold',
                  fontSize: 16,
                  justifyContent: 'center',
                }}>
                Our Workflow
              </Text>
              <Image source={require('../Assets/Line.png')} />
              <Text style={{color: Colors.primarycolor, top: 4, fontSize: 12}}>
                Enjoy our quality services at just 3 easy steps
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent:'space-around',
                top: 10,
            
              }}>

                <View style={styles.stepview}>
                     {/* step1 */}
                  <Text style={styles.txtstep1}>Step 1</Text>

                  <View style={styles.stepbox}>
                  <Image source={require('../Assets/step1.png')} style={{marginTop:5}} />
                    </View>
                    <Text
                    style={{color: Colors.primarycolor, fontWeight: 'bold',top:20,textAlign:'center'}}>
                    Schedule
                    {'\n'}
                    your service
                  </Text>
                  <View style={{top:30}}>
                  <Text style={{color: Colors.primarycolor,fontSize:12,textAlign:'center'}}>
                    Fill Credentials,
                    {'\n'}
                    Book & Relax
                  </Text>
                  </View>
                 </View>
               {/* 1st step close  */}



                <View style={styles.stepview}>
                  {/* step2 */}
                  <Text style={styles.txtstep1}>Step 1</Text>
                  <View style={styles.stepbox}>
                    <Image source={require('../Assets/step2.png')} />
                    </View>
                    <Text
                    style={{color: Colors.primarycolor, fontWeight: 'bold',top:10,textAlign:'center'}}>
                    Service at
                    {'\n'}
                    your home
                  </Text>
                  <View style={{top:15}}>
                  <Text style={{color: Colors.primarycolor,fontSize:12,textAlign:'center'}}>
                  Keep Calm, We Will
                    {'\n'}
                    Serve At Your Door
                  </Text>
                  </View>
                  

                </View>

                <View style={styles.stepview}>
                  {/* step 3 */}
                    <Text style={styles.txtstep1}>Step 1</Text>

                    <View style={styles.stepbox}>
                    <Image source={require('../Assets/step3.png')} style={{marginTop:5}} />
                    </View>
                    <Text
                    style={{color: Colors.primarycolor, fontWeight: 'bold',top:20,textAlign:'center'}}>
                     Pay after
                    {'\n'}
                    service
                  </Text>
                  <View style={{top:30}}>
                  <Text style={{color: Colors.primarycolor,fontSize:12,textAlign:'center'}}>
                  Make Payment After
                    {'\n'}
                    work completion
                  </Text>
                  </View>

                </View>

            </View>
          </View>
        </View>
        {/* thired part */}
        <View
          style={{
            backgroundColor: Colors.continercolor,
            width: '92%',
            height: 160,
            left: '4%',

            top: 30,
            borderRadius: 15,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                color: Colors.primarycolor,
                fontWeight: 'bold',
                fontSize: 16,
                borderBottomWidth: 2,
                borderBottomColor: 'rgba(51, 52, 88, 0.06)',
              }}>
              HOME SERVE Assurance
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{top: 15, left: 10,  width: '92%',}}>
            <View style={{right: 10}}>
              <Image source={require('../Assets/s1.png')} />
            </View>
            <View style={{left: 10}}>
              <Image source={require('../Assets/s2.png')} />
            </View>
            <View style={{left: 20}}>
              <Image source={require('../Assets/s3.png')} />
            </View>
            <View style={{left: 30,marginRight:40}}>
              <Image source={require('../Assets/s4.png')} />
            </View>
            
          </ScrollView>
        </View>
        {/* fourth part */}
        <View
          style={{
            backgroundColor: Colors.continercolor,
            width: '92%',
            height: 160,
            left: '4%',
            paddingStart: 15,
            top: 45,
            borderRadius: 15,
          }}>
          <View style={{alignItems: 'flex-start', top: 4 ,}}>
            <Text
              style={{
                color: Colors.primarycolor,
                fontWeight: 'bold',
                fontSize: 16,
                borderBottomWidth: 2,
                borderBottomColor: 'rgba(51, 52, 88, 0.06)',
              }}>
              {' '}
              Customer Satisfaction is our Priority
            </Text>
          </View>
          <ScrollView 
        
          horizontal={true} style={{right:7}}>
            {/* feedback part */}
            <View
              style={{
                top: 10,
                backgroundColor: '#fff',
                height: 110,
                width: 290,
                borderRadius: 15,
                left: 5,
              }}>
              <View>
                <View style={{flexDirection: 'row', top: 5}}>
                  <Image
                    source={require('../Assets/us.png')}
                    style={{top: 5}}
                  />
                  <View>
                    <Text
                      style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      Maneesha Yadav
                    </Text>
                    <Rating
                      ratingCount={5}
                      startingValue={5}
                      readonly={true}
                      imageSize={10}

                      // style={{paddingVertical: 10}}
                    />
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center',
                  
              }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: Colors.primarycolor,
                      padding: 7,
                      
                      top: 4,
                      
                    }}>
                    “Amet minim mollit non deserunt uAmet minim mollit non
                    deserunt u mjfvet minim mollit non Amet minim mollit non
                    deserunt uAmet minim Amet minim mollit non deserunt uAmet
                   .”
                  </Text>
                </View>
              </View>
            </View>

            {/* second feedback */}
            <View
              style={{
                top: 10,
                backgroundColor: '#fff',
                height: 110,
                width: 290,
                borderRadius: 15,
                left: 15,
              }}>
              <View>
                <View style={{flexDirection: 'row', top: 5}}>
                  <Image
                    source={require('../Assets/us.png')}
                    style={{top: 5}}
                  />
                  <View>
                    <Text
                      style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      Maneesha Yadav
                    </Text>
                    <Rating
                      ratingCount={5}
                      startingValue={5}
                      readonly={true}
                      imageSize={10}

                      // style={{paddingVertical: 10}}
                    />
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: Colors.primarycolor,
                      padding: 7,
                      top: 4,
                    }}>
                    “Amet minim mollit non deserunt uAmet minim mollit non
                    deserunt u mjfvet minim mollit non Amet minim mollit non
                    deserunt uAmet minim Amet minim mollit non deserunt uAmet
                   ”
                  </Text>
                </View>
              </View>
            </View>
            {/* feedback thired */}
            <View
              style={{
                top: 10,
                backgroundColor: '#fff',
                height: 110,
                width: 290,
                borderRadius: 15,
                left: 25,
                marginRight:30
              }}>
              <View>
                <View style={{flexDirection: 'row', top: 5}}>
                  <Image
                    source={require('../Assets/us.png')}
                    style={{top: 5}}
                  />
                  <View>
                    <Text
                      style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      Maneesha Yadav
                    </Text>
                    <Rating
                      ratingCount={5}
                      startingValue={5}
                      readonly={true}
                      imageSize={10}

                      // style={{paddingVertical: 10}}
                    />
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: Colors.primarycolor,
                      padding: 7,
                      top: 4,
                      
                    }}>
                    “Amet minim mollit non deserunt uAmet minim mollit non
                    deserunt u mjfvet minim mollit non Amet minim mollit non
                    deserunt uAmet minim Amet minim mollit non deserunt uAmet
                   ”
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        {/* Fiveth part */}
        <View
          style={{
            // backgroundColor: Colors.continercolor,
            width: '92%',
            left: '4%',
            right: '4%',
            top: 50,
            height: 250,
            borderRadius: 15,
            
          }}>
            
            <View style={{}}>
            <AccordionView />
            </View>
            
           
            
          </View>
          <View style={{backgroundColor:'#fff',height:140,width:'100%',top:500}}></View>
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
   
  },
  txtstep1:{
    color: Colors.primarycolor,
    fontWeight: 'bold',
    textAlign:'center'
  },
  stepbox:{
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(51, 52, 88, 0.06)',
    top:5
  },
  stepview:{
      padding:5
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    // textAlign:'center',
    //alignItems:'center',
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 10,
  },
  continer: {
    backgroundColor: Colors.continercolor,
    height: 112,
    width: 112,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 56,
    width: 52,
  },
  text: {
    fontSize: 12,
    color:colors.secondaryText
  },
});
