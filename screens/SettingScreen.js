import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header,Body, Left, Icon, Right} from 'native-base';

export default class SettingScreen extends Component {
    render() {
        return (
            <View>
                <Header>
                    <Left>
                        <Icon name="left"/>
                    </Left>
                    <Body><Text style={{fontSize:24, fontWeight:'bold'}}>Settings</Text></Body>
                    <Right/>
                </Header>
                <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop : 10}}>
                    <Text>Setting Screen</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
});