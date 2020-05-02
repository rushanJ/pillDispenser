import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, View, Text, Switch, StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import Button from '../components/Button';
// import Columns from 'react-native-columns'


import { FlatGrid } from 'react-native-super-grid';
 

class SwichExample extends Component {
   state = {
      longitude: 0,
      latitude: 0,
      deviceId: '',
      
      items : [
        {  title: 'Slot 1', available: 10, name: 'Panadol', time:'9:00', code: '#1abc9c' }, {  title: 'Slot 1',  name: 'Zin', available: 10, time:'12:00', code: '#2ecc71' },
                         { title: 'Slot 2',name:'Digene', available: 10, time:'9:00',code: '#3498db' },
                         
      ]
   }
   
   

   

   componentDidMount = () => {
      

      // setInterval(() => {

      //      const params='longitude'.concat("=",this.state.longitude).concat("&latitude=",this.state.latitude)
      //      const url='http://192.168.8.100/pillDispancer/getInfo.php'.concat("?",params);
      //     console.log(url);
      //      fetch(url, {
      //   method: 'GET'
      //      })
      //         .then((response) => response.json())
      //         .then((responseJson) => {
      //            console.log(responseJson);
      //            this.setState({
      //               items:[
      //                   {  title: 'Slot 1', value: responseJson.distance, unit:'Km', code: '#1abc9c' }, { title: 'Slot 2',value: responseJson.temp, unit:'Celcius', code: '#2ecc71' },
      //                   { title: 'Slot 3', value: responseJson.hum, unit:'%',code: '#3498db' },
                       
      //                 ]
      //            })
      //         })
      //         .catch((error) => {
      //            console.error(error);
      //         });
        
      //      }, 5000);
     
   }
   componentWillUnmount = () => {
    
   }
   render() {
      return (
        <FlatGrid
        itemDimension={130}
        items={this.state.items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.value}>{item.available} Times at {item.time}</Text>
        
          </View>
        )}
      />
      )
   }
}
export default SwichExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 150
   },
   gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  value: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  
  title: {
    fontSize: 16,
    color: 'red',
    fontWeight: '900',

  },
  name: {
    fontSize: 16,
    color: 'blue',
    fontWeight: '900',
    marginBottom:40
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
})