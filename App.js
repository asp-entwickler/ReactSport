import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './components/LoginForm';
import Home from './components/pages/Home';
import firebase from 'firebase';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null,
      opacity: 0
    }
  }

  state = {
    spinner: false
  };  

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBlOmblpvHJewEQhobxLrttvcTT-qQybH4",
      authDomain: "sporty-78a1a.firebaseapp.com",
      databaseURL: "https://sporty-78a1a.firebaseio.com",
      projectId: "sporty-78a1a",
      storageBucket: "sporty-78a1a.appspot.com",
      messagingSenderId: "393222333730"
      });

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        spinner: !this.state.spinner
      });
    }, 3000);
  }  

  render() {
    //return (      

      switch (this.state.loggedIn) {
        case true:
          return (
            <View style={styles.container}>
              <Home/>
            </View>
          );
        case false:
          return (
            <View style={styles.container}>          
              <LoginForm />
            </View>
          );
        default:
            return null;
        // default:
        //   <View style={styles.container}>
        //   <ActivityIndicator
        //     animating={true}
        //     color="#ffffff"
        //     style={{height: 80, marginTop: 10, opacity: this.state.opacity }}
        //     size="large"/>
        //   </View>
      }
    }

  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  spinnerTextStyle: {
    color: '#FFF'
  }

});