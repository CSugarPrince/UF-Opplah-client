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
import { AsyncStorage } from 'react-native';
import colors from '../../styles/colors';
import RoundedButton from '../buttons/RoundedButton';
import BookmarkButton from '../buttons/BookmarkButton';

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: false,
      itemName: 'TEST_BOOKMARKS_4'
    };
    
    this.setIntialState = this.setInitialState.bind(this);
    this.onBookmarkPress = this.onBookmarkPress.bind(this);
    this.appendToBookmarks = this.appendToBookmarks.bind(this);
    this.removeFromBookmarks = this.removeFromBookmarks.bind(this);
  }
  componentDidMount() {
    const { listing } = this.props;
    this.setInitialState(listing)
  }

  setInitialState(listing) {
    const itemName = this.state.itemName
    try {
      AsyncStorage.getItem(itemName)
      .then(value => {
        if (value !== null) {
          // if bookmarks not empty, parse json string into array of json object
          parsed_json_array = JSON.parse(value)
  
          // search for listing
          index = parsed_json_array.findIndex(function(element) {
            return element.id == listing.id
          });

          console.log(index)
  
          if (index != -1) {
            // if this listing is bookmarked, set state
            this.setState({
              isBookmarked: true,
            });
          }
        }
      });
      
    } catch (error) {
      console.log('Error setting intial state', error)
    }
  }
  
  onCardPress(){
    alert('Card Pressed!');
  }
  appendToBookmarks(listing) {
    console.log('appending to bookmarks')
    const itemName = this.state.itemName
    
    try {
      AsyncStorage.getItem(itemName)
      .then(result => {
        if (result == null) {
          // if nothing bookmarked, create a new bookmark array and insert listing
          json_array = [listing]
          json_string = JSON.stringify(json_array)
          AsyncStorage.setItem(itemName, json_string)

          //console.log('new array', json_string)

        } else {
          // parse the result into an array of json objects
          parsed_json_array = JSON.parse(result)
          
          // push listing onto array, stringify, and save to storage
          parsed_json_array.push(listing)
          json_string = JSON.stringify(parsed_json_array)
          AsyncStorage.setItem(itemName, json_string)

          //console.log('existing array', json_string)
        }                 
      });
      
    } catch (error) {
        console.log('try catch error, error appending data: ', error)
    }
  }
  removeFromBookmarks(listing) {
    console.log('removing from Bookmarks')
    const itemName = this.state.itemName

    try {
      AsyncStorage.getItem(itemName)
      .then(result => { 
        // parse the result into an array of json objects
        parsed_json_array = JSON.parse(result)

        // filter listing out of array
        filtered = parsed_json_array.filter(function(value, index, arr){
          //console.log('value.id: \n', value.id)
          return value.id != listing.id;
        })

        // stringify array, and store
        json_string = JSON.stringify(filtered)
        AsyncStorage.setItem(itemName, json_string)

        console.log('filtered array: ', json_string)
      });
    } catch (error) {
      console.log('Error removing bookmark', error)
    }
  }
  onBookmarkPress(listing){
    
    this.setState({
      isBookmarked: !this.state.isBookmarked
    }, function() {
      // this is a callback function that executes immediately after state has changed
      if (this.state.isBookmarked) { // if now bookmarked, add it to async storage
        this.appendToBookmarks(listing)
      }
      else { // if now unbookmarked remove from Bookmarks
        this.removeFromBookmarks(listing)
      }
    });    
  }

  render() {
    const { listing } = this.props;
    // BUG: sets isBookmarked: true for all listings...
    //this.setInitialState(listing); 
    
    return(
      <View style={styles.card}>
              
        <View style={styles.headerWrapper}>
          <View style={styles.headerTop}>
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>{listing.job_title}</Text>
              <BookmarkButton 
                isBookmarked={this.state.isBookmarked}
                style={styles.bookmarkButton}
                handleOnPress={() => this.onBookmarkPress(listing)}
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
  bookmarkButton: {
    
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