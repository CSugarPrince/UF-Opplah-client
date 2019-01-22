import React from 'react';
import PropTypes from 'prop-types';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import colors from '../../styles/colors';
import RoundedButton from '../buttons/RoundedButton';

class ListingCard extends React.Component {
  onCardPress(){
    alert('Card Pressed!');
  }

  render() {
    const { listing } = this.props; 
    
    return(
      <View style={styles.card}>
              
        <View style={styles.headerWrapper}>
          <View style={styles.headerTop}>
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>{listing.job_title}</Text>
              <Image 
                source={require('../../img/empty-bookmark.png')}
                style={styles.bookmark}
              />
            </View>
            
            <Text style={styles.companyText}>{listing.company}</Text>
          </View>
          <View style={styles.headerBottom}>
            <Text>Posted on {listing.posting_date}</Text>
            <Text>sample</Text>
            <Text>something</Text>
            <Text>another something></Text>
            <Text>really long somtheing yup</Text>  
          </View>
        </View>
        
        <View style={styles.cardBody}>
          <ScrollView style={{flex:1}}>
            <Text style={{fontWeight: "bold"}}>Job Description</Text>
            <Text style={styles.descriptionText}>{listing.job_description}</Text>  
          </ScrollView>
        </View>

        <View style={styles.cardFooter}>
          <RoundedButton
            text="Details"
            color={colors.mutedBlue}
            backgroundColor={colors.white}
            handleOnPress= {() => {
              this.props.navigation.navigate('Details', {
                listing: JSON.stringify(listing),
              })
            }}
          />
        </View>      
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    //overflow: 'hidden', disables shadow for some reason...
    margin: 20,    
    borderRadius: 15,
    height: 500,
    width: "90%",
    shadowColor: colors.black,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.63,
    shadowRadius: 6.68,
    elevation: 11,
    //backgroundColor: "#0000"
    backgroundColor: colors.white,
  },
  headerWrapper: {
    flex: 1.5,    
    borderBottomColor: colors.mutedBlue,
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 20,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTop: {
    marginBottom: 20,
  },
  headerBottom: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-around",
    
  },
  bookmark: {
    height: 10,
    width: 10,
  },
  titleText: {
    fontSize: 30,
    color: colors.black,
    fontWeight: 'bold',
    
  },
  companyText: {
    fontWeight: "100",
    
  },
  cardBody: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flex: 2,
    margin: 20,
    
  },
  descriptionText: {
    //margin: 20,
  },
  cardFooter: {
    alignItems: "center",
    marginVertical: -15,   //Temp fixes. will revisit later. consider not using RoundedButton
    
  },
    
});

export default withNavigation(ListingCard);