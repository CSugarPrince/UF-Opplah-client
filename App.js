import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from'react-navigation';
import WelcomeScreen from './src/screens/Welcome.js';
import HomeScreen from './src/screens/Home.js';
import DetailsScreen from './src/screens/Details.js';
import Loader from './src/components/form/Loader';

const RootStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null,
      }
    },
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Welcome',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>  
    );
  }
}

