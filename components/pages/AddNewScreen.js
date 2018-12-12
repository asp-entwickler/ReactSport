import React from 'react';
import {View, Button, StyleSheet, Text, TextInput} from 'react-native';
import firebase from 'firebase';

export default class AddNewScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      seller: '',
      title: '',
      error: '',
      image: 'https://images.sportsdirect.com/images/products/37129661_l.jpg'
    }
  }

  static navigationOptions = {
    title: "Add New Equipment"
  };

  
    writeItem(){
      const seller = this.state.seller;
      const title = this.state.title;
      const image = this.state.image;

      firebase.database().ref('items/').push({
          seller,
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
            value={this.state.seller}
            onChangeText={seller => this.setState({ seller })}
          />
          <TextInput
            label='Equipment title'
            placeholder='Equipment Title'
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
          <TextInput editable={false} value={this.state.image}/>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
            <Button title='Add new equipment' onPress={this.writeItem.bind(this)}/>
            <Button title="Take a picture of your item!" onPress={() => this.props.navigation.navigate('Camera')}
        />



        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});