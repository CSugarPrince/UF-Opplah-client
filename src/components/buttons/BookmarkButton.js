import React from 'react';
import PropTypes from 'prop-types';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import colors from '../../styles/colors';

export default class BookmarkButton extends React.Component {
  render() {
    const { isBookmarked, handleOnPress } = this.props;

    if (!isBookmarked) {
      return(
        <TouchableOpacity
          style={styles.wrapper}
          onPress={handleOnPress}
        >
          <Image 
            source={require('../../img/empty-bookmark.png')}
            style={styles.bookmarkImage}
          />
        </TouchableOpacity>
      );
    }
    else {
      return(
        <TouchableOpacity
          style={styles.wrapper}
          onPress={handleOnPress}
        >
          <Image 
            source={require('../../img/full-bookmark.png')}
            style={styles.bookmarkImage}
          />
        </TouchableOpacity>
      );
    }
  }
}

BookmarkButton.propTypes = {
  isBookmarked: PropTypes.bool.isRequired,
};

BookmarkButton.defaultTypes = {
  isBookmarked: false,
};

const styles = StyleSheet.create({
  wrapper: {
    height: 30,
    width: 30,
  },
  bookmarkImage: {
    height: 30,
    width: 30,
  },
});