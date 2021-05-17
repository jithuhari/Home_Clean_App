import React,{useState} from 'react';
import {Text,Image,StyleSheet,TouchableOpacity, View, ScrollView,TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const  RegPartner=({navigation})=>{
    const[addDoc,setaddDoc]=useState('');
    const [dropDownValue,setDropDownValue]=useState('Aadhar Card');
  const [items,setItems]=useState([
                    {label: 'Aadhar Card', value: 'Aadhar Card'},
                    {label: 'ID Card', value: 'ID Card'},
                    {label: 'Driving License', value: 'Driving License'},
                    {label: 'Passport', value: 'Passport'},
                    {label: 'PAN Card', value: 'PAN Card'},
  ]);
  return(
        
    <View style={{flex:1,backgroundColor:Colors.background}}>  
    <ScrollView>
    <View style={styles.header}>
      <TouchableOpacity style={{bottom:5,left:20}} onPress={()=> navigation.goBack()}>
        <AntDesign style={styles.iconItem} 
         name="left" 
         size ={20}
         color={Colors.background}/>
        </TouchableOpacity>  
    
        <View style={{width:148,height:70,paddingLeft:80}}>
        <Image style={{flex:1,width:50,height:10,tintColor:'#fff'}} 
        source=
        {require('../Assets/appbar.png')}/>
       </View>
       <Text style={styles.text}>Home Serve</Text>
                   </View>
       
       <View style={styles.appbarcontainer}>
      <Text style={styles.headingStyle}>Register as Partner</Text>
    </View>
         <View style={styles.labelContainer}>
             <View>
                 <Text style={styles.labelText}>Full Name</Text>
                 <TextInput style={styles.txtInput} placeholder={'Enter full name'} placeholderTextColor='#dcdcdc'></TextInput>
             </View>
             <View>
                 <Text style={styles.labelText}>Permanant Address</Text>
                 <TextInput style={styles.txtAddr,{textAlignVertical:'top',height:100,
                 borderColor:'#dcdcdc',borderWidth:2,borderRadius:8,margin:10}} multiline={true}  
                 placeholder={'Enter your Address'} placeholderTextColor='#dcdcdc' ></TextInput>
             </View>
             <View>
                 <Text style={styles.labelText}>Select ID Proof</Text>
                 <DropDownPicker
            items={items}
            defaultValue={dropDownValue}
            onChangeItem={item=> setDropDownValue(item.value)}
            labelStyle={{
              fontSize: 14,
              textAlign: 'justify',
              color: '#dcdcdc',
            }}
            selectedLabelStyle={{
              color: '#dcdcdc',
              fontWeight: '800',
            }}
            itemStyle={{justifyContent: 'center'}}
            style={{paddingVertical: 5,}}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            placeholder="Aadhar Card"
            placeholderTextColor='#dcdcdc'
            containerStyle={{width: 340, height: 38,marginLeft:10,borderRadius:8}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-end',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
          />
          </View>
             <View>
                 <Text style={styles.labelText}>ID Proof No.</Text>
                 <TextInput style={styles.txtInput} placeholder={'Enter ID No.'} placeholderTextColor='#dcdcdc'></TextInput>
             </View>
             <View>
                 <Text style={styles.labelText}>Upload Scanned ID Proof</Text>
                 <View style={styles.viewScan}>
                 <TextInput placeholder={'No file selected'} placeholderTextColor='#dcdcdc'/>
                 <TouchableOpacity style={styles.btn1}>
                     <MaterialIcons name='add' color='#FFFFFF' size={25} style={{marginRight:25,marginTop:2}}/>
                 </TouchableOpacity>
                 </View>
                 
                     
                  
             </View>
         </View>
         <View style={styles.buttonContainer}>
          
             <TouchableOpacity style={styles.btn2}>
                 <Text style={{color:'#fff',marginTop:10,fontWeight:'bold'}}>Submit for Verification</Text>
             </TouchableOpacity>
             <View style={{margin:20}}></View>
         </View>
        </ScrollView>
     
        </View>
);

} ;

const styles=StyleSheet.create({
header:{
width:414,
height:100,
flexDirection:'row',
paddingTop:1,
alignItems:'center',
elevation:1,
backgroundColor:Colors.primarycolor

},
headingStyle: {
marginTop: 10,
marginBottom: 10,
fontSize: 16,
fontWeight: '900',
textAlign: 'center',
alignItems: 'center',
fontWeight: 'bold',
color: Colors.secondaryText,
},

text:{
fontSize: 20,
fontWeight:'900',
 fontWeight:'bold',
 color:Colors.secondaryText,
paddingLeft:10
},
labelContainer:{
flexDirection:'column',
marginTop:40
},
buttonContainer:{
justifyContent:'center',
width:340,
height:40,
alignItems:'center',
marginLeft:10,
marginTop:30
},
appbarcontainer:{
width:'100%',
height:50,
backgroundColor:Colors.primarycolor,
borderBottomEndRadius:17,
borderBottomStartRadius:17
},
labelText:{
fontWeight:'bold',
color:'#5F5F82',
fontSize:16,
lineHeight:19,
marginLeft:10

},
container: {
flex: 1,
flexDirection: 'row',
justifyContent: 'space-evenly',
marginTop:20
},
txtInput:{
borderRadius:8,
borderColor:'#dcdcdc',
margin:10,
borderWidth:2,
width:'95%',
height:40,
alignItems:'center'

},
txtAddr:{
paddingHorizontal:10,
borderRadius:8,

margin:20,
borderWidth:2,
width:'95%',
height:134,
},
txtScan:{
margin:10,
alignItems:'center',
color:'#dcdcdc'
},
viewScan:{
flexDirection:'row',
justifyContent:'space-between',
borderRadius:8,
borderColor:'#dcdcdc',
margin:10,
borderWidth:2,
width:'95%',
height:40,
},

btn1:{
borderRadius:6,
backgroundColor:'#5F5F82',
width:80,
height:35,
alignItems:'flex-end'
},
btn2:{
borderRadius:8,
backgroundColor:Colors.primarycolor,
width:340,
height:40,
alignItems:'center'
},

textInput:{
paddingTop:180,
textAlign:'center',
color:Colors.secondaryText,
fontSize:20
},
button: {
backgroundColor:Colors.primarycolor,
width: '40%',
height: 40

},
input: {
height: 40,
margin: 12,
borderWidth: 1,
},



});
export default  RegPartner;