import React from 'react';
import PropTypes from 'prop-types';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableHighlight,
} from 'react-native';
import colors from '../../styles/colors';
import { Ionicons } from '@expo/vector-icons';

export default class RoundedButton extends React.Component {
  render() {
    const { text, color, backgroundColor, icon, handleOnPress } = this.props;  
    return (
      <TouchableHighlight 
        style={[{backgroundColor}, styles.wrapper]}
        onPress={handleOnPress}
        >
            <View>                      
                <Text style={[{color}, styles.buttonText]}>{text}</Text>
            </View>
      </TouchableHighlight>  
    );
  }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired,
};

RoundedButton.defaultTypes = {
    color: colors.black,
    backgroundColor: 'transparent',
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});