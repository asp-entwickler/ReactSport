import React from 'react';
import {View, Button, Text } from 'react-native';
import firebase from 'firebase';

export default class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: "Details"
  };



  render() {
    const {navigation} = this.props;
    const title = navigation.getParam('title', 'No title');
    const artist = navigation.getParam('artist', 'No Equipment defined');

    return (
        <View>
          <Text>Titlen på equipment er: {title}</Text>
          <Text>Kunstneren på equipment er: {artist}</Text>
        </View>
    );
  }
}
