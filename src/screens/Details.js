import React from 'react';
import colors from '../styles/colors';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

export default class Details extends React.Component {
  render() {
    return (
      <Text style={{flex: 1, justifyContent: "center", alignItems: "center"}}>Details Screen!</Text>
    );
  }
}