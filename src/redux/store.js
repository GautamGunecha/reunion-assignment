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

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
