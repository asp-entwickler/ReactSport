import React from 'react';
import { ActivityIndicator, FlatList, View, Button, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {

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
    title: "Sports Equipment"
  };

  componentDidMount() {
    this.getItemsFromApiAsync();
  }

  getItemsFromApiAsync() {

    var that = this;

    return firebase.database().ref('items').on('value', function (snapshot) {
        var items = Object.values(snapshot.val());
        var sellerID = items[0].seller;

        //Lav et nyt database-kald:
        firebase.database().ref('seller/' + sellerID).once('value', function (snapshotSeller) {

          //loop over albums og erstat
          items.forEach(function(item) {
            item.seller = snapshotSeller.val().firstName + " " + snapshotSeller.val().lastName;
          });
          that.setState({
            isLoading: false,
            dataSource: items,
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
