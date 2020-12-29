import { HOMECOMPONENTS } from "../variables";
import {
  DefaultDestination,
  DefaultSource,
} from "../../common/componentsSets/HomepageSets";
const initialState = {
  filter: {
    category: "全部",
  },
  GetDestination: DefaultDestination,
  GetSource: DefaultSource,
};

export default function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case HOMECOMPONENTS.GET_HOME_PAGE_COMPONENTS:
      return {
        ...state,
        GetDestination: action.selectDestination
          ? action.selectDestination
          : DefaultDestination,
        GetSource: action.selectSource ? action.selectSource : DefaultSource,
      };
    case HOMECOMPONENTS.UPDATE_SOURCE_COMPONENTS:
      return {
        ...state,
        GetSource: action.selectSource,
      };
    case HOMECOMPONENTS.UPDATE_DESTINATION_COMPONENTS:
      return {
        ...state,
        GetDestination: action.selectDestination,
      };
    case HOMECOMPONENTS.CATEGORY_SOURCE_COMPONENTS:
      return {
        ...state,
        GetSource: action.selectCategoryData,
      };
    case HOMECOMPONENTS.SET_FILTER_CATEGORY_COMPONENTS:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: action.category,
        },
      };
    case HOMECOMPONENTS.RESET_FILTER_COMPONENTS:
      return {
        ...state,
        filter: {
          category: "全部",
        },
      };
    case HOMECOMPONENTS.CLEAR_HOME_PAGE_COMPONENTS:
      return [];

    default:
      return state;
  }
}
