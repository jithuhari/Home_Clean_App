import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Animated,
  Slider,
  TextInput,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as Animatable from 'react-native-animatable';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import MyTabs from '../routes/tabnavigation';

const App = ({navigation}) => {


  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState('');
  const [showRealApp, setShowRealApp] = useState(false);
  const [number, onChangeNumber] = React.useState(null);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const fadeAnim = useState(new Animated.Value(0))[0]; // Initial value for opacity: 0
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
        <Text style={{color: '#483D8B'}}> Skip</Text>
        </View>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={{color: '#483D8B'}}>Done</Text>
      </View>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          //backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
          backgroundColor: '#fff',
        }}>
        <Animatable.View
          style={styles.card}
          animation="slideInDown"
          iterationCount={5}
          direction="alternate">
          <Image style={styles.introImageStyle} source={item.image} />
        </Animatable.View>
        <Text style={styles.introTitleStyle}>{item.title}</Text>

        <Image
          style={{
            width: 250,
            height: 250,

            borderRadius: 100 / 2,
          }}
          source={item.animation}
        />

        {/* <Animated.Image
          style={{
            width: 200,
            height: 200,
            opacity: fadeAnim,
            borderRadius:100 / 2,
            
          }}
          source={item.animation}
        /> */}

        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };
  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Image
              style={styles.ImageStyle}
              source={require('../Assets/Images/Home.png')}
            />
            <Text style={styles.titleStyle}>
              Amet minim non deserunt ullamco
            </Text>

            <View style={{flexDirection: 'row', top: '-20%'}}>
              <View style={styles.contry}>
                <Image
                  style={styles.flag}
                  source={require('../Assets/Images/flag.png')}
                />
                <Text style={{padding: 10}}>+91</Text>
              </View>
              <View style={{borderColor: '#000', borderWidth: 1, width: '70%'}}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Enter Mobile number"
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')} style={{height:80}}>
              <View style={styles.buttonCircle} >

                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                <Text style={{color: '#483D8B'}}> Skip</Text>
                </View>
               
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          showNextButton={true}
          onSkip={onSkip}


          renderNextButton={_renderNextButton}
          renderDoneButton={_renderDoneButton}
          dotStyle={styles.dote}
          activeDotStyle={styles.activedote}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    top: '-10%',
  },
  contry: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  flag: {
    width: 40,
    height: 30,
    marginLeft: 5,
  },

  introImageStyle: {
    // width: 150,
    // height: 100,
    resizeMode: 'contain',
  },
  introTextStyle: {
    fontSize: 10,
    color: '#483D8B',
    textAlign: 'center',
    paddingVertical: 20,
  },
  introTitleStyle: {
    fontSize: 10,
    color: '#483D8B',
    fontWeight: '600',
  },
  dote: {
    borderWidth: 1,
    borderColor: '#483D8B',
  },
  activedote: {
    backgroundColor: '#483D8B',
  },
  buttonCircle: {
    flexDirection: 'row',
    height: 40,
    width:'100%',
    //backgroundColor: 'rgba(0, 0, 0, .2)',
    alignItems: 'flex-end',
    bottom: '-5%',
  },
});

const slides = [
  {
    key: 's1',
    title: 'Our Services',
    text: 'Electrical Repair Works',
    image: require('../Assets/Images/Home.png'),
    animation: require('../Assets/gif/electrician11.gif'),
    backgroundColor: '#fff',
  },
  {
    key: 's2',
    title: 'Our Services',
    text: 'A/C Installation and Repair Works',
    image: require('../Assets/Images/Home.png'),
    animation: require('../Assets/gif/ac.gif'),
    backgroundColor: '#fff',
  },
  {
    key: 's3',
    title: 'Our Services',
    text: 'Cleaning And Sanitisation Works',
    image: require('../Assets/Images/Home.png'),
    animation: require('../Assets/gif/clean.gif'),
    backgroundColor: '#ffff',
  },

  {
    key: 's4',
    title: 'Our Services',
    text: 'Interior Designing Works',
    image: require('../Assets/Images/Home.png'),
    animation: require('../Assets/gif/interior.gif'),
    backgroundColor: '#fff',
  },
  {
    key: 's5',
    title: 'Our Services',
    text: 'Plumbing Works',
    image: require('../Assets/Images/Home.png'),
    animation: require('../Assets/gif/plumb.gif'),
    backgroundColor: '#fff',
  },
];
