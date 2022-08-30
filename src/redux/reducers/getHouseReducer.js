import * as actionTypes from "../constants/actionType";

const initialState = [];

export const getHouseListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_LISTED_PROPERTY:
      break;
    default:
      return state;
  }
};

export const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      break;

    case actionTypes.REMOVE_FROM_WISHLIST:
      break;

    default:
      return state;
  }
};
