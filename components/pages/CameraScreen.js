import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Permissions, Camera, MediaLibrary } from 'expo';

export default class App extends React.Component {
  state = {
    flash: 'off'
  };

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    let photo = await this.camera.takePictureAsync();
    console.log(photo);
    await MediaLibrary.createAssetAsync(photo.uri);
  };

  render() {
    if (this.state.hasCameraPermission === null) {
      return <View />;
    } else if (this.state.hasCameraPermission === false) {
      return <Text>You do not have access to the camera :/</Text>;
    } else {
      return (
        <View style={{ flex: 1}}>
        <Camera style={{ flex: 1}} type={this.state.type} ref={ref => { this.camera = ref; }}></Camera>
        <View
        style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'flex-end', paddingBottom: 15}}>
        <Button
        onPress={() => {
          if(this.state.type === Camera.Constants.Type.back) {
            this.setState({type: Camera.Constants.Type.front})
          } else {
            this.setState({type: Camera.Constants.Type.back})
          }
        }}
        title="Flip">
         </Button>
           <Button
              onPress={this.snap.bind(this)}
              title="Take Pic">
            </Button>
          </View>
        </View>
        );
      }
    }
  }