import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import shopReducers from "./shopReducers";

import pagesReducer from "../pages/pagesReducers";
import LanguageSwitcher from "./languageSwitcher/reducer";
const rootReducer = combineReducers({
  cartReducer,
  wishlistReducer,
  shopReducers,
  pagesReducer,
  LanguageSwitcher,
});

export default rootReducer;
