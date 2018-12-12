import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, TextInput, View, Button, ImageBackground, Dimensions } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignUpForm from './SignUpForm';

const BG_IMAGE = require('/Users/MortenDalgaardOttesen/Desktop/exercise11-12---Firebase-login-kopi/assets/images/newLoginPicture.png');

export default class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      hasLogin: true
    };
  }

  signIn() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', loading: false, error: '' });
  }

  onLoginFail(err) {
    this.setState({ loading: false, error: err.message });
  }


  render() {
    switch(this.state.hasLogin) {
      case true: 
      return (
        <View style={styles.container}>
        <ImageBackground
          source={BG_IMAGE}
          style={styles.bgImage}
          ></ImageBackground>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 8}}>Sign in</Text>
          <TextInput
            label='Username'
            placeholder='user@mail.dk'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            placeholder='Password'
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
  
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
  
          {this.renderButton()}
          <Button 
          title='Sign up' onPress={() => this.setState({hasLogin : false})}/>
        </View>
      );
      case false: {
        return(
          <View>
            <SignUpForm/>
            <Button
            title='go back' onPress={() => this.setState({hasLogin : true})}/>
          </View>
        )
      }  
    }
  }
  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='small' />
    }
    return (
      <Button 
      title="Log in" onPress={this.signIn.bind(this)}>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgImage: {
    width: 380,
    height: 380,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
