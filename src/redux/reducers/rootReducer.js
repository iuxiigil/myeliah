import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import shopReducers from "./shopReducers";
import homepageReducer from "./homepageReducer";

const rootReducer = combineReducers({
  cartReducer,
  wishlistReducer,
  shopReducers,
  homepageReducer,
});

export default rootReducer;
