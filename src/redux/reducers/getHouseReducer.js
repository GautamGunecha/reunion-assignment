import * as actionTypes from "../constants/actionType";

const houseListState = {
  houses: [],
};

const wishListState = {
  wish: [],
};

export const getHouseListReducer = (state = houseListState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_LISTED_PROPERTY:
      return { ...state, houses: action.payload };
    default:
      return state;
  }
};

export const wishListReducer = (state = wishListState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      break;

    case actionTypes.REMOVE_FROM_WISHLIST:
      break;

    default:
      return state;
  }
};
