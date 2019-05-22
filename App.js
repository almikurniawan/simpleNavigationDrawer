/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  SafeAreaView
} from 'react-native';

import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

const {width} = Dimensions.get('window');

const CustomeDrawerCompnent = (props) => (
  <View style={{flex:1}}>
    <View style={{height :150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('./assets/user.png')} style={{height:120, width:120, borderRadius:80}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </View>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home : HomeScreen,
  Settings : SettingScreen
},{
  contentComponent : CustomeDrawerCompnent,
  drawerWidth : width - 60,
  contentOptions : {
    activeTintColor : 'orange'
  }
})

export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('oldversion', () => oldversion);
