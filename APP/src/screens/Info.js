import React, { memo,useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
 import Info from '../model/shedule';
 import { View,AsyncStorage } from "react-native";
 
import { showMessage, hideMessage } from "react-native-flash-message";

const Dashboard = ({ navigation }) => {
  const [user, setUser] = useState({ value: '0', error: '' });
  const [device, setDevice] = useState({ value: '0', error: '' });
  AsyncStorage.getItem('user').then((value) => setUser({ value: value, error: '' }));
  AsyncStorage.getItem('device').then((value) => setDevice({ value: value, error: '' }));
  
  
  console.log(user.value);
  console.log(device.value);
return(

  <Background>
    {/* <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button> */}
    <Header>Device Infomation </Header>
    <Info/>
    
    <Button mode="outlined" onPress={() => navigation.navigate('NewShedule')}>
      Add/Change Shedule
    </Button>
    
    <View style={{ flex: 1 }}>
        <Button
          onPress={() => {
            /* HERE WE GONE SHOW OUR FIRST MESSAGE */
            showMessage({
              message: "Simple message",
              type: "info",
            });
          }}
          title="Request Details"
          color="#841584"
        />
      </View>
    
    
  </Background>
);
        }
export default memo(Dashboard);
