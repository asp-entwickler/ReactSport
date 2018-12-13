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
                  source={{ uri: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/30624483_10211267010137505_1369893778875716450_n.jpg?_nc_cat=109&_nc_ht=scontent-arn2-1.xx&oh=43872560304ad9b1fafe9b7c780c22e3&oe=5CA8148A' }}
                  style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 10}}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 40, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1, fontSize: 26, color: 'black', fontFamily: 'bold'}}>
                  Adam
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 20, width: SCREEN_WIDTH - 80, marginLeft: 40}}>
                <Text style={{flex: 1, fontSize: 15, color: 'black', fontFamily: 'regular'}}>
                  23 years old, studying HA(it) on CBS in Copenhagen on my 5th semester. As a person I am very outgoing and social.  
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
                      <Text style={styles.infoAnswerLabel}>193 cm</Text>
                      <Text style={styles.infoAnswerLabel}>80 kg</Text>
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
                title="Message Adam"
                titleStyle={{ fontFamily: 'regular', fontSize: 20, color: 'white', textAlign: 'center' }}
                onPress={() => alert('Adam has received your message')}
                activeOpacity={1.0}
              />
              <Button
              containerStyle={{ marginVertical: 20 }}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}
              buttonStyle={{ height: 55, width: SCREEN_WIDTH - 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
              linearGradientProps = {{
                colors: ['rgba(214,116,112,1)', 'rgba(233,174,87,1)'],
                start: [1, 0],
                end: [0.2, 0]
              }} 
              title="Log Out" 
              onPress={() => firebase.auth().signOut()}>
      
              </Button>
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