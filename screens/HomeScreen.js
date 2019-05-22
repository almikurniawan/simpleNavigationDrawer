import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header, Left, Icon, Body, Right} from 'native-base';

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon : ({tintColor})=> (
            <Icon name="home" style={{fontSize : 24, color : tintColor}} />
        )
    };
    render() {
        return (
            <View>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
                    </Left>
                    <Body><Text style={{fontSize:24, fontWeight:'bold'}}>Home</Text></Body>
                    <Right/>
                </Header>
                <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop : 10}}>
                    <Text>Home Screen</Text>
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