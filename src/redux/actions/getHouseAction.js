import * as actionTypes from "../constants/actionType";

// gets list of house and set it to state
export const getHouseListsAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_ALL_LISTED_PROPERTY,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_LISTED_PROPERTY,
      payload: [],
    });
  }
};

// helps user to add property to wishList
export const wishListAction = (id) => async (dispatch, getState) => {
  try {
    const {
      listedProperty: { houses },
    } = getState();

    const selectedHouse = houses.find((item) => item.id === parseInt(id));

    dispatch({
      type: actionTypes.ADD_TO_WISHLIST,
      payload: selectedHouse,
    });

    localStorage.setItem("wishList", JSON.stringify(getState().wishLists.wish));
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TO_WISHLIST,
      payload: "",
    });
  }
};

// helps user to remove property from wishlist

export const removeFromWishListAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.REMOVE_FROM_WISHLIST,
      payload: parseInt(id),
    });
    localStorage.setItem("wishList", JSON.stringify(getState().wishLists.wish));
  } catch (error) {
    dispatch({
      type: actionTypes.REMOVE_FROM_WISHLIST,
      payload: "",
    });
  }
};
