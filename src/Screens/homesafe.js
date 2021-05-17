import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
const Homesafe = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>

      <View style={{backgroundColor:Colors.primarycolor,}}>
      <View style={styles.header}>
        
        <TouchableOpacity
          style={{bottom: 5, top: 10, left: 5}}
          onPress={() => navigation.goBack(null)}>
          <AntDesign
            style={styles.iconItem}
            name="left"
            size={20}
            color={'#fff'}
          />
        </TouchableOpacity>
        <View
          style={styles.headerview}>
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
    
      </View>
      <ScrollView >

        <View style={styles.container}>

            <ImageBackground
              style={{
              width: null,
              height: 250,
              resizeMode: 'cover',
             //tintColor: '#5F5F82',
             
            }}
              source={require('../Assets/firstpic.png')}>

            <View style={styles.containers}>
                <View style={styles.textBox}>
                  <Image
                    source={require('../Assets/saftyicon.png')}
                    style={{width: 25, height: 25, right: 12}}
                  />
                  <Text style={{color: Colors.primarycolor, right: 10}}>
                    HOME safe
                  </Text>
                </View>
              </View>
              <Text style={styles.text1}>Best-in class Safety Measures</Text>
            </ImageBackground>

            </View>

     
<View style={styles.imagecontainer}>


            <View style={styles.container1}>
            <Image
            style={{width: 140, height: 150, borderRadius: 150 / 2, right: 10,marginLeft:35,marginTop:10}}
            source={require('../Assets/woman.png')}
            />
            <View style={{width:'55%',height:150,alignSelf:'center'}}>
            
            <Text style={styles.title}>Health is Wealth</Text>
         
              <Text style={styles.subText}>
           
              Ever heard the popular saying “health is wealth”? This gives large meaning to our life.
         </Text>
            </View>
            </View>

            <View style={styles.container1}>
            <View style={{width:'55%',height:150,alignSelf:'center',padding:10,marginLeft:16,marginRight:16}}>
            
            <Text style={styles.title}>Health is Wealth</Text>
         
              <Text style={styles.subText}>
           
              Ever heard the popular saying “health is wealth”? This gives large meaning to our life.
         </Text>

         </View>
         <Image
            style={{width: 140, height: 150,position:'relative',right:20}}
            source={require('../Assets/employee.png')}
          />

           
    </View>

{/* 3rd row */}
<View style={styles.container1}>
            <Image
            style={{width: 140, height: 150, borderRadius: 150 / 2, right: 10,marginLeft:35,marginTop:25}}
            source={require('../Assets/woman.png')}
            />
            <View style={{width:'55%',height:150,alignSelf:'center'}}>
            
            <Text style={styles.title}>Health is Wealth</Text>
         
              <Text style={styles.subText}>
           
              Ever heard the popular saying “health is wealth”? This gives large meaning to our life.
         </Text>
            </View>
            </View>


            <View style={styles.container1}>
            <View style={{width:'55%',height:150,alignSelf:'center',padding:10,marginLeft:16,marginRight:16}}>
            
            <Text style={styles.title}>Health is Wealth</Text>
         
              <Text style={styles.subText}>
           
              Ever heard the popular saying “health is wealth”? This gives large meaning to our life.
         </Text>

         </View>
         <Image
            style={{width: 140, height: 150,position:'relative',right:20}}
            source={require('../Assets/employee.png')}
          />

            
           
    </View>
    <View style={{marginBottom:50}}/>
         

</View>

      </ScrollView>
    </View>
  );
};
export default Homesafe;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
   backgroundColor: Colors.primarycolor,
   borderBottomRightRadius: 15,
   borderBottomLeftRadius: 15,
  },
  headerview:{
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    top: 8,
    
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
   
    fontWeight: 'bold',
    color: Colors.text,
    paddingLeft: 10,
  },
  container: {
    width: '100%',
    backgroundColor:Colors.primarycolor,
   borderBottomLeftRadius:20,
   borderBottomRightRadius:20,
    flexDirection: 'column',
    opacity:0.8,
    flex:1,
  },
  text1: {
    paddingTop: 180,
    textAlign: 'center',
    color: Colors.backgroundcolor,
    fontSize: 20,
  },
  containers: {
    flexDirection: 'row',
    top: 150,
    left: 45,
    borderRadius: 15,
    
  },
  textBox: {
    height: 25,
    width: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    left: 75,
    borderRadius: 15,
  },
imagecontainer:{
flex:1,
flexDirection:'column',
justifyContent:'space-evenly',

},

container1:{
   
    flexDirection:'row'
},
 title: {
    fontWeight: '700',
    color: Colors.primarycolor,
    textAlign:'center',
    marginTop:25
  
  },
  subText: {
  color: 'rgba(95, 95, 130, 1)',
  
  justifyContent:'flex-start',
  margin:10
  

    
  },
 

});
