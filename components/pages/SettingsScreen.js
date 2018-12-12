import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';

export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    title: "Settings"
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />

       <Button title="Log Out" onPress={() => firebase.auth().signOut()}></Button>
      </View>
    );
  }
}