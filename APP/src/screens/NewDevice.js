import React, { memo, useState } from 'react';
import {AsyncStorage, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';

const axios = require('axios');

const LoginScreen = ({ navigation }) => {
  const [deviceId, setDeviceId] = useState({ value: 'as1', error: '' });
  const [name, setName] = useState({ value: 'Zin', error: '' });
  const [user, setUser] = useState({ value: '0', error: '' });
  AsyncStorage.getItem('user').then((value) => setUser({ value: value, error: '' }));
 // AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))

  const _onLoginPressed = () => {
   
    axios.post("http://critssl.com/pillDispancer/setDevice.php?deviceId="+deviceId.value+"&name="+name.value+"&user="+user.value)
    .then(function (response) {
      setUser({ value: response.data.user, error: '' });
      if (response.data.success) navigation.navigate('Dashboard');
      else alert("Setting Up error");
    })
    .catch(function (error) {
      console.log(error);
    });
   
    // AsyncStorage.setItem('name', JSON.stringify(name.value), () => {});
     AsyncStorage.setItem('id', JSON.stringify(user.value), () => {});

    // navigation.navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

    

    

      <TextInput
        label="deviceId"
        returnKeyType="next"
        value={deviceId.value}
        onChangeText={text => setDeviceId({ value: text, error: '' })}
        error={!!deviceId.error}
        errorText={deviceId.error}
        autoCapitalize="none"
       
      />

      <TextInput
        label="name"
        returnKeyType="done"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        secureTextEntry
      />

      

      <Button mode="contained" onPress={_onLoginPressed}>
        Add Device
      </Button>

      
    </Background>
  );
};

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
