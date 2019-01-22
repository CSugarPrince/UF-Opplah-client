import React from 'react';
import PropTypes from 'prop-types';
import { 
    StyleSheet, 
    View,
    Text,
    Image,
    Modal,
} from 'react-native';
import colors from '../../styles/colors';

export default class Loader extends React.Component {
    render() {
    const { animationType, visible } = this.props;
      return(
          <Modal 
            visible={visible}
            animationType={animationType}
            transparent={true}
            >
              <View style={styles.wrapper}>
                <View>
                  <Image
                    style={styles.loaderImage}
                    source={require('../../img/loader.gif')}
                  />
                </View>
              </View>
                
            </Modal>
        );
    }
}

Loader.propTypes = {
    visible: PropTypes.bool.isRequired,
    animationType: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderImage: {
        width: 90,
        height: 90,
    },
});