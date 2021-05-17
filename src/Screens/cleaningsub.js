import React, {useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Pressable,
  Alert,
  TouchableOpacityBase,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import {Searchbar, Button, Card, Title, Divider} from 'react-native-paper';
// import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';

const HomeSanitization = ({route, navigation}) => {
  const {head} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [select, setRemove] = useState('Select');

  const [active, setactive] = useState(true);
  const [secolor, setsecolor] = useState(styles.modalButton);
  const changedisable = () => {
    setactive(false);
    setsecolor(styles.modalButtondisable);
  };

  const [color, setcolor] = useState(styles.button1);
  const [scolor, ssetcolor] = useState(styles.button1);
  const [txtcolor, settextcolor] = useState(styles.storeyText);
  const [stxtcolor, ssettextcolor] = useState(styles.storeyText);
  const change = () => {
    setcolor(styles.button1f);
    settextcolor(styles.storeyTextf);
    ssetcolor(styles.button1);
    ssettextcolor(styles.storeyText);
  };
  const rchange = () => {
    setcolor(styles.button1);
    settextcolor(styles.storeyText);
    ssetcolor(styles.button1f);
    ssettextcolor(styles.storeyTextf);
  };
  const [rateText, setRateText] = useState('');
  const [sdText, setSDTxt] = useState('');
  const [dropDownValue, setDropDownValue] = useState(
    'Select size of your house/Apartment',
  );
  const [items, setItems] = useState([
    {label: '1RK', value: '1RK'},
    {label: '1BHK', value: '1BHK'},
    {label: '2BHK', value: '2BHK'},
    {label: '3BHK', value: '3BHK'},
    {label: '4BHK', value: '4BHK'},
    {label: '5BHK', value: '5BHK'},
    {label: 'Duplex', value: 'Duplex'},
  ]);
  const remove = () => {
    setRemove('Remove');
  };
  const selecta = () => {
    setRemove('Select');
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [searchQuery, setSearchQuery] = React.useState('');

  const [singlecut, setSinglecut] = useState('');
  const onPressSinglecut = () => {
    setSinglecut('₹2,499');
  };
  const [single, setSingleText] = useState('');
  const onPressSingle = () => {
    setSingleText('₹1,499');
  };
  const [duplexcut, setDuplexcut] = useState('');
  const onPressDuplexcut = () => {
    setSinglecut('₹3,499');
  };
  const [duplex, setDuplexText] = useState('');
  const onPressDuplex = () => {
    setSingleText('₹1,899');
  };
  const singleCombined = () => {
    onPressSinglecut();
    onPressSingle();
  };
  const duplexCombined = () => {
    onPressDuplexcut();
    onPressDuplex();
  };

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
            size={20}
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
      <View style={{backgroundColor: Colors.primarycolor}}>
        <Searchbar
          style={styles.searchStyle}
          placeholder="Search for a Service"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.appbarcontainer}>
        <Text style={styles.headingStyle}>{head}</Text>
      </View>
      <ScrollView>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity style={styles.buttonstyle}>
            <Image
              source={require('../Assets/cleaning/offer.png')}
              style={{height: 24, width: 24, top: 20, left: 15}}
            />
            <Text style={styles.buttonText}>
              Upto 35% off on Home sanitization services
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <Text style={styles.cardTitle}>{head}</Text>

          <View style={{flexDirection: 'row', marginTop: 12}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>
              Featccncncn ncjc cncjnj slvhnfvskak
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>
              Featccncncn ncjc cncjnj slvhnfvskak
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>
              Featccncncn ncjc njnkvjdf cncjnj slskak
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>Featccncncn cncjnj slvhnfvskak</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.text1}>Size of house:</Text>
            <View style={{marginLeft: 10}}>
              <DropDownPicker
                items={items}
                defaultValue={dropDownValue}
                onChangeItem={item => setDropDownValue(item.value)}
                labelStyle={{
                  fontSize: 12,
                  textAlign: 'justify',
                  color: '#5F5F82',
                }}
                selectedLabelStyle={{
                  color: '#5F5F82',
                  fontWeight: '800',
                }}
                itemStyle={{justifyContent: 'center'}}
                style={{paddingVertical: 5}}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                placeholder="Select size of your house/Apartment"
                placeholderStyle={{fontWeight: 'bold', textAlign: 'auto'}}
                containerStyle={{width: 240, height: 38}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-end',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={styles.text1}>Storey :</Text>
            <TouchableOpacity
              onPress={() => {
                singleCombined();
                change();
                changedisable();
                setRateText('₹1,499');
                setSDTxt('Single');
              }}
              style={color}>
              <Text style={txtcolor}>Single</Text>
            </TouchableOpacity>
            <View style={{width: 30}}></View>
            <TouchableOpacity
              onPress={() => {
                duplexCombined();
                rchange();
                changedisable();
                setRateText('1,899');
                setSDTxt('Duplex');
              }}
              style={scolor}>
              <Text style={stxtcolor}>Duplex</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.singleRate}>
            <Text
              style={{textDecorationLine: 'line-through', color: '#828282'}}>
              {singlecut}
            </Text>
            <Text style={{marginLeft: 10, fontWeight: 'bold'}}>{single}</Text>
          </View>
          <View style={styles.duplexRate}>
            <Text
              style={{textDecorationLine: 'line-through', color: '#828282'}}>
              {duplexcut}
            </Text>
            <Text style={{marginLeft: 10, fontWeight: 'bold'}}>{duplex}</Text>
          </View>

          {/* Single modal view */}
          <View
            style={{
              alignItems: 'flex-end',
              marginRight: 15,
              marginBottom: 5,
              borderRadius: 16,
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={secolor}
              disabled={active}
              onPress={() => {
                toggleModal();
                remove(modalVisible);
              }}>
              <Text style={styles.textStyle}>{select}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0}
            onBackdropPress={() => {
              toggleModal();
              selecta();
            }}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.bottomView}>
              <View style={styles.modalView}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{marginLeft: 20, flexDirection: 'row'}}>
                    <Text style={styles.modalText}>
                      {rateText === '₹1,499' ? '₹1,499' : '₹1,899'}
                    </Text>
                    <Text style={{marginLeft: 40, color: '#FFFFFF'}}>
                      1 item
                    </Text>
                    <View style={{marginLeft:'18%'}}></View>
                    <Pressable
                  style={[styles.modalButton, styles.buttonClose]}
                  onPress={() => {navigation.navigate('Address');}}>
                  <Text style={styles.continueText}>Continue</Text>
                </Pressable>
                  </View>
                  <Text style={{color: '#FFFFFF', marginLeft: 15}}>
                    {head} | {dropDownValue} |{' '}
                    {sdText === 'Single' ? 'Single' : 'Duplex'}
                  </Text>
                </View>
                
              </View>
            </View>
          </Modal>
          {/* Duplex modal view */}
          {/* 
           
              <View style={styles.bottomView}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    hasBackdrop={true}
                    backdropOpacity={0}
                    onBackdropPress={() => {toggleModal();selecta()}}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);}}>
                <View style={styles.bottomView}>
                  <View style={styles.modalView}>
                    <View style={{flexDirection:'column'}}>
                      <View style={{marginLeft:20,flexDirection:'row'}}>
                  
                  <Text style={styles.modalText}>₹1,499</Text>
                  <Text style={{marginLeft:40,color: "#FFFFFF",}}>1 item</Text>
                  </View>
                    <Text style={{color: "#FFFFFF",marginLeft:15}}>Home Sanitization | 2BHK | Single</Text>
               </View>  
            <Pressable
              style={[styles.modalButton, styles.buttonClose]}
              onPress={() => ('')}>
              <Text style={styles.continueText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
        </View>
        <View style={{left: '4%', right: '4%', top: -25}}>
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
                      1
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
                      2
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
                      3
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
  storeyButton1: {
    backgroundColor: '#FFFFFF',
    height: 30,
    width: 80,
    borderRadius: 6,
    marginLeft: 70,
  },
  storeyButton2: {
    backgroundColor: '#FFFFFF',
    height: 30,
    width: 80,
    borderRadius: 6,
    marginLeft: 20,
  },
  storeyText: {
    color: Colors.primarycolor,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  storeyTextf: {
    color: Colors.backgroundcolor,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  singleRate: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 230,
  },
  duplexRate: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 230,
  },
  pickerContainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  headingStyle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
  },
  container2: {
    left: '4%',
    right: '4%',
    width: '92%',
    height: 365,
    backgroundColor: Colors.continercolor,
    marginStart: 5,
    marginEnd: 5,
    borderRadius: 16,
  },
  buttonViewStyle: {
    left: '4%',
    right: '4%',
    top: 15,
    height: 90,
  },
  textdot: {
    paddingLeft: 18,
    color: '#333458',
  },
  text3: {
    color: '#5F5F82',
    flex: 1,
    paddingLeft: 1,
  },
  cardContainer: {
    marginTop: 10,
    flex: 2,
  },
  button1: {
    backgroundColor: Colors.backgroundcolor,
    width: 90,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    borderRadius: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    left: 70,
    right: 15,
  },
  button1f: {
    backgroundColor: Colors.primarycolor,
    width: 90,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    borderRadius: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    left: 70,
    right: 15,
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
  text1: {
    marginTop: 10,
    color: Colors.primarycolor,
    fontSize: 14,
    left: 8,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 10,
    color: '#5F5F82',
    fontSize: 16,
    left: 8,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    fontWeight: '900',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: 12,
  },
  searchStyle: {
    borderRadius: 16,
    marginStart: 10,
    marginEnd: 15,
  },

  appbarcontainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primarycolor,
    borderBottomEndRadius: 15,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    color: Colors.backgroundcolor,
    fontSize: 14,
    fontWeight: '700',
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
    width: 330,
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
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 50,
    left: 10,
    // right:100
  },
  modalView: {
    flexDirection: 'row',
    backgroundColor: '#5F5F82',
    borderRadius: 20,
    width: 330,
    height: 90,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    bottom:25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    borderRadius: 8,
    marginLeft: 10,
    // right:20,
    width: 96,
    height: 32,
    // elevation: 2,
    backgroundColor: '#d1d1d1',
    // top:-10
  },
  modalButtondisable: {
    borderRadius: 8,
    marginLeft: 20,
    width: 96,
    height: 32,
    // elevation: 2,
    backgroundColor: '#333458',
  },
  // buttonOpen: {
  //   backgroundColor: '#333458',
  // },
  buttonClose: {
    backgroundColor: '#FFFFFF',
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  continueText: {
    color: '#5F5F82',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  modalText: {
    color: '#FFFFFF',
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  modalContainerView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
  },
  cardTitle: {
    marginTop: 10,
    color: Colors.primarycolor,
    fontWeight: 'bold',
    fontSize: 15,
    left: 30,
  },
  appbarcontainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primarycolor,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
});
export default HomeSanitization;
