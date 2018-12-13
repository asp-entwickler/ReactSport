import React from 'react';
import { ActivityIndicator, FlatList, View, Button, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';

export default class BasketScreen extends React.Component {

  static navigationOptions = {
    title: "Basket"
  };
  constructor(props) {

    super(props);
    this.state = {
      isLoading: true
    }
    console.ignoredYellowBox = [
      'Setting a timer'
      ];
  }

  static navigationOptions = {
    title: "Your basket"
  };

  componentDidMount() {
    this.getBasketFromApiAsync();
  }

  getBasketFromApiAsync() {

    var that = this;

    return firebase.database().ref('basket').on('value', function (snapshot) {
        var basket = Object.values(snapshot.val());
        var sellerID = basket[0].seller;

        //Lav et nyt database-kald:
        firebase.database().ref('sellers/' + sellerID).once('value', function (snapshotSeller) {

          //loop over albums og erstat
          basket.forEach(function(basket) {
            basket.seller = snapshotSeller.val().firstName + " " + snapshotSeller.val().lastName;
          });
          that.setState({
            isLoading: false,
            dataSource: basket,
          });
        });
        
      });
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'stretch' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return (
      <View>
      <FlatList
        data={this.state.dataSource}
        renderItem={({ item }) =>
          <ListItem
            avatar={
              <Image
                style={{ width: 65, height: 65 }}
                source={{ uri: item.image }} />
            }
            title={item.title}
            titleStyle={{ color: 'tomato', fontWeight: 'bold' }}
            subtitleStyle={{ color: 'tomato' }}
            subtitle={item.seller}
            chevronColor='tomato'
            onPress={() => this.props.navigation.navigate('Details', item)}
            containerStyle={{ backgroundColor: 'white' }}
          />
        }
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  }
}
