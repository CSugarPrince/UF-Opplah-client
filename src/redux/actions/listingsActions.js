import sampleData from "../../data/listings.json";
import {
  FETCH_LISTINGS_BEGIN,
  FETCH_LISTINGS_SUCCESS,
  FETCH_LISTINGS_FAILURE
} from "./types"

// Real fetch function goes here...


// Mock fetch function
function fakeGetListings() {
  return new Promise(resolve => {
    // Resolve after a timeout to see loader
    setTimeout(
      () => {resolve(sampleData)}, 1000
    );
  });
}

export function fetchListings() {
  return dispatch => {
    dispatch(fetchListingsBegin());
    return fakeGetListings()
      .then(json => {
        dispatch(fetchListingsSuccess(json.listings));
        return json.listings;
      })
      .catch(error => {
        dispatch(fetchListingsFailure(error))
      });
  }
}

// Handle HTTP errors because fetch won't
// implement later...

export const fetchListingsBegin = () => ({
  type: FETCH_LISTINGS_BEGIN
});

export const fetchListingsSuccess = listings => ({
  type: FETCH_LISTINGS_SUCCESS,
  payload: { listings }
});

export const fetchListingsFailure = error => ({
  type: FETCH_LISTINGS_FAILURE,
  payload: { error }
});