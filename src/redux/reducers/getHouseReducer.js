import * as actionTypes from "../constants/actionType";

// Helps us to maintain web life-cycle and state

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
      const selectedHouse = action.payload;
      const ifHouse = state.wish.find((house) => house.id === selectedHouse.id);
      if (ifHouse) {
        return {
          ...state,
          wish: state.wish.map((x) =>
            x.id === ifHouse.id ? selectedHouse : x
          ),
        };
      } else {
        return {
          ...state,
          wish: [...state.wish, selectedHouse],
        };
      }
    case actionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wish: state.wish.filter((x) => x.id !== action.payload),
      };

    default:
      return state;
  }
};
