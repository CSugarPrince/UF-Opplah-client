import React from 'react';
import colors from '../styles/colors';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
import RoundedButton from '../components/buttons/RoundedButton';

export default class Welcome extends React.Component {
  onGetStartedPress() {
    alert('Get Started Button Pressed');
  }
  onMoreOptionsPress() {
    alert('More Options Button Pressed');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}> 
          <Image 
            source={require('../img/logo-white.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}> Welcome to UF Opplah!</Text>

          <View style={styles.appDescription}> 
            <Text style={styles.appDescriptionText}>UF Opplah is a job-finding app 
            intended for Computer Science & related fields at the University of Florida.
            </Text>
          </View>

          <View style={styles.buttonsWrapper}>
          <TouchableHighlight 
          style={styles.moreOptionsButton}
          onPress={this.onMoreOptionsPress}>
            <Text style={styles.moreOptionsButtonText}>More Options</Text>
          </TouchableHighlight>

          <RoundedButton
            text="Get Started"
            color={colors.mutedBlue}
            backgroundColor={colors.white}
            handleOnPress= {() => this.props.navigation.navigate('Home')}
          />
          </View>

        </View>  
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.mutedBlue, 
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 75,
        height: 75,
        marginTop: 50,
        marginBottom: 40,
        
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    appDescription: {
      marginBottom: 40,
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    appDescriptionText: {
      color: colors.white,
      fontSize: 20,
      fontWeight: '200',
    },
    buttonsWrapper: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 50,
    },
    moreOptionsButton: {
      marginTop: 10,
      alignSelf: 'flex-start',
      marginBottom: 10,
    },
    moreOptionsButtonText: {
      color: colors.white,
      fontSize: 16,
    },
});
