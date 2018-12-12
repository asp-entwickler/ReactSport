import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import DetailsScreen from './DetailsScreen'; 
import AddNewScreen from './AddNewScreen'
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './ProfileScreen';
import LocationScreen from './LocationScreen';
import CameraScreen from './CameraScreen';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  Location: { screen: LocationScreen },
  Camera: { screen: CameraScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
  Location: { screen: LocationScreen },
  Camera: { screen: CameraScreen },
});

const ProfileStack = createStackNavigator({
  Profile: { screen: ProfileScreen },
  Details: { screen: DetailsScreen },
  Location: { screen: LocationScreen },
  Camera: { screen: CameraScreen },
})

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    AddNew: {screen: AddNewScreen},
    Settings: { screen: SettingsStack },
    Profile: { screen: ProfileStack },
  },

  {
    navigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ focused, tintColor }) => {

        const { routeName } = navigation.state;
        var iconName;

        if (routeName === 'Home') {
          iconName = 'md-information-circle';
        } else if (routeName === 'AddNew') {
          iconName = 'ios-add-circle';
        } else if (routeName === 'Settings') {
          iconName = 'md-options';
        } else if (routeName === 'Profile') {
          iconName = 'md-contact';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


