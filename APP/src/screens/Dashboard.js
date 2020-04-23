import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Info from '../model/deviceList';
import { Text, View, TouchableOpacity, StyleSheet,ScrollView  } from 'react-native'
import FlashMessage from "react-native-flash-message";

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
    ]
 }
 alertItemName = (item) => {
  alert(item.name);
  
}
const Dashboard = ({ navigation }) => (
  
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
    {/* <Info/> */}
    <Header>My Devices</Header>
    {
      this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => navigation.navigate('Info')}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
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
  </Background>
);

export default memo(Dashboard);


const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     width:350,
     backgroundColor: '#838cc9',
     alignItems: 'center',
  },
  text: {
   fontSize: 20,
   lineHeight: 26,
   color: '#e31e5c',
   textAlign: 'center',
   marginBottom: 14,
  }
})
