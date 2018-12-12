import React from 'react';
import {View, Button, StyleSheet, Text, TextInput} from 'react-native';
import firebase from 'firebase';

export default class AddNewScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      artist: '',
      title: '',
      error: '',
      //image: 'https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg'
      image: 'https://images.sportsdirect.com/images/products/37129661_l.jpg'
    }
  }

  static navigationOptions = {
    title: "Add New Equipment"
  };

  
    writeAlbum(){
      const artist = this.state.artist;
      const title = this.state.title;
      const image = this.state.image;

      firebase.database().ref('albums/').push({
          artist,
          title,
          image
      }).then((data)=>{
          alert("Equipment added successfully");
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
      })
  }

  render() {
    return (
        <View style={styles.container}>
           <TextInput
          label='Equipment'
            placeholder='Equipment'
            value={this.state.artist}
            onChangeText={artist => this.setState({ artist })}
          />
          <TextInput
            label='Equipment title'
            placeholder='Equipment title'
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
          <TextInput editable={false} value={this.state.image}/>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
            <Button title='Add new Album' onPress={this.writeAlbum.bind(this)}/>



        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});