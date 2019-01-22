import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function listingsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      // Mark the state as "loading" so we can show loading spinner
      // also, reset errors
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      // All done: set loading "false".
      // Replace items with ones retreived from server.
      return {
        ...state,
        loading: false,
        items: action.payload.listings
      };

    case FETCH_PRODUCTS_FAILURE:
      // The request failed but it did stop. loading is "false".
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }
    default:
    // ALWAYS have a default case in reducer
    return state;
  }
}