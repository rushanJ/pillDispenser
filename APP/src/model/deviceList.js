import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,ScrollView  } from 'react-native'
   
class List extends Component {
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
   render() {
      return (
         <View>
             
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

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