import React from 'react';
import colors from '../styles/colors';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    TouchableHighlight,
    FlatList,
} from 'react-native';
import Loader from '../components/form/Loader';
import ListingCard from '../components/cards/ListingCard';
import fakeData from '../data/listings.json';

export default class Home extends React.Component {
  fakeGetListings() {
    return new Promise (resolve => {
      setTimeout(() => {
        resolve(fakeData);
      }, 1000);
    });
  }

  displayListings() {
    this.fakeGetListings()
      //.then((response) => response.json()) // since response is pure json, response.json() won't work
      .then((responseJson) => {
        this.setState({
          loading: false,
          listings: responseJson.listings,
        })
      })
      .catch((error) => {
        console.warn(error);
      })
  }

  handleRefresh = () => { // using arrow syntax allows me to bind 'this'
    this.setState({
      loading: true,
      listings: []
    })
    this.displayListings();
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      listings: []
    };
  }
  
  componentDidMount() {
    // call function to display listings
    this.displayListings();
  }

  render() {
    if (this.state.loading) {
      return <Loader visible={true} animationType="fade"/>
    }

    return(
      <View style={styles.homeWrapper}>
        <FlatList
          data={this.state.listings}
          renderItem={({item}) => {
            return(
              <ListingCard listing={item}/>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
          refreshing={this.state.loading}
          onRefresh={this.handleRefresh}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.mutedOrange,
  },
});