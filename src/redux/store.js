import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getHouseListReducer,
  wishListReducer,
} from "./reducers/getHouseReducer";

const reducers = combineReducers({
  listedProperty: getHouseListReducer,
  wishLists: wishListReducer,
});

const watchLists = localStorage.getItem("wishList")
  ? JSON.parse(localStorage.getItem("wishList"))
  : [];

const initialState = {
  wishLists: { wish: watchLists },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
