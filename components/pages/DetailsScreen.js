import React from 'react';
import {View, Button, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
import firebase from 'firebase';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IMAGE_SIZE = SCREEN_WIDTH - 20;

export default class DetailsScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Details"
  };

  render() {
    const {navigation} = this.props;
    const image = navigation.getParam('image', 'No Image');
    const title = navigation.getParam('title', 'No title');
    const seller = navigation.getParam('seller', 'No seller defined');

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Image source={{ uri: image }} style={{ width: 130, height: 130 }} />

          <Text style={{justifyContent: 'center', alignItems: 'center'}}>Title: {title}</Text>
          <Text>Sold by: {seller}</Text>
          <Button
          title="Location of seller"
          onPress={() => this.props.navigation.navigate('Location')}
        />
        <Button
          containerStyle={{ marginVertical: 20 }}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          buttonStyle={{ height: 55, width: SCREEN_WIDTH - 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
          linearGradientProps = {{
              colors: ['rgba(214,116,112,1)', 'rgba(233,174,87,1)'],
              start: [1, 0],
              end: [0.2, 0]
              }}
          title="Add to basket"
          titleStyle={{ fontFamily: 'regular', fontSize: 20, color: 'white', textAlign: 'center' }}
          onPress={() => alert('Item was added to basket')}
          activeOpacity={1.0}
          />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
