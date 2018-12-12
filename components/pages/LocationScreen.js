import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Permissions, Location, Constants, MapView } from 'expo';

export default class LocationScreen extends React.Component {
    
    static navigationOptions = {
        title: "Location"
      };

  state = {
    latitude: 37.78825,
    longitude: -122.4324,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'You have encountered an enrror',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Location access permission not given, please give that in settings',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ latitude: location.coords.latitude, longitude: location.coords.longitude });
  };

  render() {
    return (
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 55.678161,
          longitude: 12.522283,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
    );
  }
}
