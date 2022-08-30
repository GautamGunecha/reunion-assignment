import * as actionTypes from "../constants/actionType";

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

export const wishListAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ADD_TO_WISHLIST,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TO_WISHLIST,
      payload: "",
    });
  }
};

export const removeFromWishListAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.REMOVE_FROM_WISHLIST,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REMOVE_FROM_WISHLIST,
      payload: "",
    });
  }
};
