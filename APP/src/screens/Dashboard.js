import React, { memo,useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Info from '../model/deviceList';
import {AsyncStorage, Text, View, TouchableOpacity, StyleSheet,ScrollView  } from 'react-native'
import FlashMessage from "react-native-flash-message";
const axios = require('axios');
state = {
    names: [
       {
          id: 0,
          name: 'Ben',
       },
       {
          id: 1,
          name: 'Susan',
       },
       {
          id: 2,
          name: 'Robert',
       },
       {
          id: 3,
          name: 'Mary',
       }
    ],
    datas:""
 }


const Dashboard = ({ navigation }) => {
   const [data, setData] = useState({ value:[], error: '' });
   const [user, setUser] = useState({ value: '0', error: '' });

   AsyncStorage.getItem('user').then((value) => setUser({ value: value, error: '' }));

   shiftWindow = (item) => {
      //alert(item);
      AsyncStorage.setItem('device',item);

       //console.log(state.datas);
          navigation.navigate('Info')
      }

 axios.get("http://critssl.com/pillDispancer/getDeviceList.php?user="+user.value)
 .then(function (response) {
   setData({ value: response.data, error: '' });
   //  console.log(data.value);
   // this.setState({names:response.data});
   // console.log(this.state.names);
 })
 .catch(function (error) {
   console.log(error);
 });
 console.log(data.value);

  return(<Background>

    <Header>My Devices</Header>
    {
      data.value.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {()=>shiftWindow(item.id) }>
                     <Text style = {styles.text}>
                        {item.name} 
                     </Text>
                  </TouchableOpacity>
               ))
            }
            <TouchableOpacity
                     key = {0}
                     style = {styles.newDeviceContainer}
                     onPress = {() => navigation.navigate('NewDevice')}>
                     <Text style = {styles.newDeviceText}>
                        +
                     </Text>
                  </TouchableOpacity>
  </Background>
);
         }

export default memo(Dashboard);


const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     width:350,
     backgroundColor: '#512c78',
     alignItems: 'center',
  },
  text: {
   fontSize: 20,
   lineHeight: 26,
   color: '#79e0a2',
   textAlign: 'center',
   marginBottom: 14,
  },
  newDeviceContainer: {
   padding: 10,
   marginTop: 3,
   width:350,
   backgroundColor: '#ba3c90',
   alignItems: 'center',
},
newDeviceText: {
 fontSize: 20,
 lineHeight: 26,
 color: '#79e0a2',
 textAlign: 'center',
 marginBottom: 14,
}
})
