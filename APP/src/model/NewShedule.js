import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import ModalDropdown from 'react-native-modal-dropdown';

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
            

               <ModalDropdown 
               options={['Slot 1', 'Slot 2', 'Slot 3', 'Slot 4']}
               dropdownStyle = {styles.input1}
               textStyle={styles.txt}
               animated
               defaultValue="Select a Slot"
               dropdownTextStyle={styles.txt1}
               underlineColorAndroid = "transparent"
               placeholder = "Slot"/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>    
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "No Of Pills Available"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Time"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 10
   },
   input: {
     width:350,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   input1: {
      width:350,
       height: 400,
       borderColor: '#7a42f4',
       borderWidth: 1,
       fontSize: 20,
    },
    txt: {
      
       fontSize: 20,
    },
    txt1: {
      
      fontSize: 20,
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      width:350,
      height: 40,
     
     
   },
   submitButtonText:{
      color: 'white', 
      
    
   }
})