import React from "react";
import { View } from "react-native";
import FlashMessage from "react-native-flash-message";
 
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View ref={"otherView1"} />
        <View ref={"otherView2"} />
        <View ref={"otherView3"} />
        {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}
        <FlashMessage position="top" /> {/* <--- here as last component */}
      </View>
    );
  }
}