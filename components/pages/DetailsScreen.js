import React from 'react';
import { View, Button, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
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
    const { navigation } = this.props;
    const image = navigation.getParam('image', 'https://_No_Image_URL');
    const title = navigation.getParam('title', 'No title');
    const seller = navigation.getParam('seller', 'No seller defined');

    return (

      <View>
        <View style={styles.container}>

          <View style={{ width: 130, height: 130 }}>
            <Image source={{ uri: image }} style={{ width: 130, height: 130 }} />
          </View>

          <View style={{ alignSelf: 'stretch', alignItems: 'left', padding: 5 }} >

            <Text style={styles.sideDescription}> Title: {title}</Text>
            <Text style={styles.sideDescription}> Sold by: {seller}</Text>

            <View style={{ paddingTop: 5, alignItems: 'left' }}>
              <Button
                title="Location of seller"
                onPress={() => this.props.navigation.navigate('Location')} >
              </Button>
              <Button
                linearGradientProps={{
                  colors: ['rgba(214,116,112,1)', 'rgba(233,174,87,1)'],
                  start: [1, 0],
                  end: [0.2, 0]
                }}
                title="Add to basket"
                onPress={() => alert('Item was added to basket')}>
              </Button>
            </View>
          </View>

        </View>

        <View >
          <Text style={{ paddingTop: 10 }}> Description: </Text>
          <Text style={{ alignItems: 'center', padding: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et magna sodales urna venenatis porttitor. Nullam elementum purus eget placerat tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris blandit magna in quam tristique bibendum. Aenean eget odio accumsan, hendrerit lectus fringilla, viverra enim. Fusce cursus faucibus vestibulum. Donec laoreet sem quis magna pharetra, et mollis ante sollicitudin. Maecenas enim libero, placerat at ex vel, fermentum dapibus erat. Donec vitae dignissim nunc. Aliquam luctus quis lectus vitae porttitor. Donec lobortis odio lorem, ullamcorper posuere nibh rhoncus a. Etiam pulvinar tellus sed tortor blandit cursus. Sed sed augue orci.
          </Text>
        </View>

      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 5
  },
  sideDescription: {
    paddingTop: 5
  }

});
