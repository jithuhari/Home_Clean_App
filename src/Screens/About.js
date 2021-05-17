import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Colors from '../config/colors';

const About = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View>
        {/*headerview */}
        <View style={styles.header}>
        <TouchableOpacity
          style={{bottom: 5, left: 20, top: 10}}
          onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconItem}
            name="left"
            size={20}
            color={Colors.backgroundcolor}
          />
        </TouchableOpacity>

        <View style={{width: 148, height: 47, paddingLeft: 90, top: 10}}>
          <Image
            style={{width: 45, height: 45, tintColor: '#fff'}}
            source={require('../Assets/Images/Home.png')}
          />
        </View>
        <Text style={styles.text}>HOME SERVE</Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.primarycolor,
          height: 45,
          borderBottomLeftRadius: 15,
          borderBottomEndRadius: 15,
          zIndex:1
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 14,
            fontWeight: 'bold',
            color: Colors.backgroundcolor,
          }}>
      About Home serve
        </Text>
      </View>
      </View>
      <View style={styles.mainView}>
        <Text
          style={{
            color: Colors.secondaryText,
            left: 20,
            marginTop: 15,
            fontWeight: '400',
            textAlign: 'justify',
            width: 320,
          }}>
          Bodhi, played by Patrick Swayze, is part mystic, part criminal, and
          over-all surfer. From clues developed by Pappas, it appears that he
          and his gang rob banks to support their surfing, and then move on when
          the seasons change. Johnny Utah does become friendly with them, and
          even falls in love with Bodhi's ex-girlfriend (Lori Petty), while
          trying to fit together the case. And then the plot grows truly
          ingenious, all the way down to its Zen ending on a lonely, storm-swept
          beach in Australia. Bodhi, played by Patrick Swayze, is part mystic,
          part criminal, and over-all surfer. From clues developed by Pappas, it
          appears that he and his gang rob banks to support their surfing, and
          then move on when the seasons change. Johnny Utah does become friendly
          with them, and even falls in love with Bodhi's ex-girlfriend (Lori
          Petty), while trying to fit together the case. And then the plot grows
          truly ingenious, all the way down to its Zen ending on a lonely,
          storm-swept beach in Australia.
        </Text>
      </View>
    </View>
  );
};
export default About;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
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
  text: {
    fontSize: 17,

    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: -3,
    top: 5,
  },
  
  mainView: {
    flexDirection: 'column',
    height: 700,
  },
});
