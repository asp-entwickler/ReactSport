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
      apiKey: "AIzaSyCiMwwEiOOnqg3E6KBiV6gp5jOTiUVEL-c",
      authDomain: "testproject-b0154.firebaseapp.com",
      databaseURL: "https://testproject-b0154.firebaseio.com",
      projectId: "testproject-b0154",
      storageBucket: "testproject-b0154.appspot.com",
      messagingSenderId: "782440153458"
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

});