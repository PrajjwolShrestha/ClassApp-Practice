import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Button, Alert } from 'react-native';
//custom component
import {TextBox} from './components/TextBox';
import {ClickCounter} from './components/ClickCounter';

export default function App()  {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello World!</Text>
      <Button title="Click Me Now" color="blue"  onPress={()=> Alert.alert('You just pressed a button')}></Button>
      <StatusBar style="auto" />
      <TextBox color="green" size="24" text="Custom Component"/>
      <TextBox color="black" size="18" text="Another Custom Component"/>

      <ClickCounter/>

      <ClickCounter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    color:'red',
    fontSize:40

  }
});
