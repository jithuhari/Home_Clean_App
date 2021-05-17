import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Colors from '../config/colors';
import {Rating} from 'react-native-elements';

const Review = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      {/* <ScrollView style={{height: 990}}> */}
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
          My Reviews
        </Text>
      </View>
        </View>
        <View>
        <TouchableOpacity style={{ zIndex:1,alignSelf:'flex-end',right:20,position:'absolute',top:525}}>
            <AntDesign
              style={styles.iconItem}
              name="pluscircle"
              size={45}
              color={Colors.primarycolor}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
        <View style={styles.mainView}>
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: '700',
              left: 27,
              marginTop: 15,
            }}>
            Cleaning service
          </Text>
          <Rating
            ratingCount={5}
            startingValue={6}
            readonly={true}
            imageSize={15}
            style={{right: 115}}
          />
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: '700',
              left: 27,
              marginTop: 15,
              width: 310,
              textAlign: 'justify',
            }}>
            “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
            mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
            Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
            non deserunt uAmet minim mollit non deserunt u Amet minim mollit non
            Amet minim mollit non.”
          </Text>

          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: '700',
              left: 27,
              marginTop: 15,
            }}>
            Cleaning service
          </Text>
          <Rating
            ratingCount={5}
            startingValue={6}
            readonly={true}
            imageSize={15}
            style={{right: 115}}
          />

          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: '700',
              left: 27,
              marginTop: 15,
              width: 310,
              textAlign: 'justify',
            }}>
            “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
            mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
            Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
            non deserunt uAmet minim mollit non deserunt u Amet minim mollit non
            Amet minim mollit non.”
          </Text>
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: '700',
              left: 27,
              marginTop: 15,
            }}>
            Cleaning service
          </Text>
          <Rating
            ratingCount={5}
            startingValue={7}
            readonly={true}
            imageSize={15}
            style={{right: 115}}
          />

          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: '700',
              left: 27,
              marginTop: 15,
              width: 310,
              textAlign: 'justify',
            }}>
            “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
            mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
            Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
            non deserunt uAmet minim mollit non deserunt u Amet minim mollit non
            Amet minim mollit non.”
          </Text>
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: '700',
              left: 27,
              marginTop: 15,
            }}>
            Cleaning service
          </Text>
          <Rating
            ratingCount={5}
            startingValue={6}
            readonly={true}
            imageSize={15}
            style={{right: 115}}
          />
          <Text
            style={{
              color: Colors.secondaryText,
              fontWeight: '700',
              left: 27,
              marginTop: 15,
              width: 310,
              textAlign: 'justify',
            }}>
            “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
            mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
            Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
            non deserunt uAmet minim mollit non deserunt u Amet minim mollit non
            Amet minim mollit non.”
          </Text>
          
        </View>
      </ScrollView>
    </View>
  );
};
export default Review;
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
    fontSize: 15,

    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: -3,
    top: 5,
  },
  mainView: {
    flexDirection: 'column',
    height: 700,
  },
  mainView:{
    flexDirection:'column',height:730
},

});
