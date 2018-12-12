import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, StatusBar
} from 'react-native';
import { Button } from 'react-native-elements'
import { Font } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IMAGE_SIZE = SCREEN_WIDTH - 20;

class CustomButton extends Component {
  constructor() {
    super();

    this.state = {
      selected: false
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setState({
      selected
    });
  }

  render() {
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <Button
        title={title}
        titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'regular' }}
        buttonStyle={selected ? { backgroundColor: 'rgba(213, 100, 140, 1)', borderRadius: 100, width: 127 } : { borderWidth: 1, borderColor: 'white', borderRadius: 30, width: 127, backgroundColor: 'transparent' }}
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState({ selected: !selected })}
        />
    );
  }
}

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('../../assets/fonts/Georgia.ttf'),
      'regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
      'light': require('../../assets/fonts/Montserrat-Light.ttf'),
      'bold': require('../../assets/fonts/Montserrat-Bold.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  static navigationOptions = {
    title: "Profile"
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
        />
        { this.state.fontLoaded ?
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
            </View>
            <ScrollView style={{flex: 1}}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{ uri: 'https://scontent.fcph4-1.fna.fbcdn.net/v/t31.0-8/21366616_10213297452942054_81848847982796380_o.jpg?_nc_cat=111&_nc_ht=scontent.fcph4-1.fna&oh=27502ce786e235518ef96f463f7f6b97&oe=5CB0EC07' }}
                  style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 10}}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 40, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1, fontSize: 26, color: 'black', fontFamily: 'bold'}}>
                  Morten
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 20, width: SCREEN_WIDTH - 80, marginLeft: 40}}>
                <Text style={{flex: 1, fontSize: 15, color: 'black', fontFamily: 'regular'}}>
                  21 years old, studying HA(it) on CBS in Copenhagen on my 5th semester. As a person I am very outgoing and social.  
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 30}}>
                <Text style={{flex: 1, fontSize: 15, color: 'black', fontFamily: 'regular', marginLeft: 40}}>
                  Information
                </Text>
                <View style={{flex: 0, flexDirection: 'row', marginTop: 20, marginHorizontal: 30}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 0}}>
                      <Text style={styles.infoTypeLabel}>  Age</Text>
                      <Text style={styles.infoTypeLabel}>  Height</Text>
                      <Text style={styles.infoTypeLabel}>  Weight</Text>
                      <Text style={styles.infoTypeLabel}>  Location</Text>
                      <Text style={styles.infoTypeLabel}>  Interests</Text>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                      <Text style={styles.infoAnswerLabel}>21</Text>
                      <Text style={styles.infoAnswerLabel}>190 cm</Text>
                      <Text style={styles.infoAnswerLabel}>71 kg</Text>
                      <Text style={styles.infoAnswerLabel}>Frederiksberg, København</Text>
                      <Text style={styles.infoAnswerLabel}>Football, Basketball</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Button
                containerStyle={{ marginVertical: 20 }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                buttonStyle={{ height: 55, width: SCREEN_WIDTH - 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
                linearGradientProps = {{
                  colors: ['rgba(214,116,112,1)', 'rgba(233,174,87,1)'],
                  start: [1, 0],
                  end: [0.2, 0]
                }}
                title="Message Morten"
                titleStyle={{ fontFamily: 'regular', fontSize: 20, color: 'white', textAlign: 'center' }}
                onPress={() => alert('Morten has received your message')}
                activeOpacity={1.0}
              />
            </ScrollView>
          </View> :
          <Text>Loading...</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center'
  },
  nameHeader: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: 'left',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 15,
    textAlign: "left",
    color: 'black',
    fontFamily: 'regular',
    paddingBottom: 10,
  }
});